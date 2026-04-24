import json
import requests

def fetch_data():
    url = "https://api.treasury.sundae.fi/graphql"
    query = """
    query {
      instanceById(id: "9e65e4ed7d6fd86fc4827d2b45da6d2c601fb920e8bfd794b8ecc619") {
        projects {
          identifier
          label
          description
          vendor {
            label
          }
          milestones {
            identifier
            label
            description
            status
            value {
              quantity
            }
            completions {
              description
              evidence {
                label
                anchorUrl
              }
            }
          }
        }
      }
    }
    """
    
    response = requests.post(url, json={'query': query})
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Query failed with code {response.status_code}: {response.text}")

def transform(raw_data):
    projects = raw_data['data']['instanceById']['projects']
    
    vendor_mapping = {
        "addr1q9qk3n36gv5pclrym2dhedv9hqs2dchkt0nf36tscap3paaf7ma3972u24k8d0ejjgakphc9yp6zsxc2q0nsjmuvcmxsly0a5a": "Intersect MBO",
        "addr1qxkty7fvrjcswfpj0pf2ergrlpc8xtzmersscg4ghqyezsg77rkpz23uwdfe2e4au6m2heqmk7gersd6560dljc9s8eqr6r3v3": "Cardano Foundation",
        "addr1q9sz5kw40pmnkcmmfvssm5fy2vzkk7l0wu5szv25nnffkqnkc35qyrgnqu8tl96u5eejytgvtsqatr2ms6hrxhdzq4pslvp2rm": "Vellum Labs",
        "addr1qyn28fkuh5qwxrvl69u38j74nntcphr7hsktw563yc9l4aj9qmnf27m74mhyrs6hkfh4pgmsgv39eypdcufq6g4t6mssgdvca8": "GO MAESTRO INC",
        "addr1qy236l8zxnyvvm7uaxtvp87k36a045h8em0y82clams4wfuwpj9clsvsf85cd4xc59zjztr5zwpummwckmzr2myjwjnsrv508n": "OpShin",
        "addr1qxnuhkxz0mgh0vx6jg9zg4qp9pg27ckm6uv622fsxtghap3sruuxr0ev6mn5907qz4wl4s6qvsygmvrdc5qzwq0mlrwsannve8": "Rainfire DAO",
        "addr1q9gcxfl9fe9ulluvtc2sxj6xux7jfa49zzq4aheyywqm0k3gudvqrjyfk4nqpvscu2ggqg67x9e0dk5l5p4s6msvkpys6qv4v6": "Snek Foundation",
        "addr1q8q7jyap76l0d5gqj8naw5t49yu3f0h7qkzsps9z0gfjcu25uj747vu83mvg3fuh6ttdgwshjwtcne6esrpct2uzmnuqdqd82j": "Catalyst FC"
    }
    
    transformed_projects = []
    
    for p in projects:
        total_lovelace = sum(int(m['value'][0]['quantity']) for m in p['milestones'])
        total_ada = total_lovelace / 1_000_000
        spent_lovelace = sum(int(m['value'][0]['quantity']) for m in p['milestones'] if m['status'] in ['Withdrawn', 'Matured'])
        spent_ada = spent_lovelace / 1_000_000
        
        status = "In Progress"
        if all(m['status'] in ['Withdrawn', 'Matured'] for m in p['milestones']):
            status = "Completed"
        elif any(m['status'] == 'Paused' for m in p['milestones']):
            status = "Paused"
        
        vendor_label = p['vendor']['label']
        vendor_name = vendor_mapping.get(vendor_label, vendor_label)
        
        if vendor_name.startswith('addr1') and ' - ' in p['label']:
            parts = p['label'].split(' - ')
            if len(parts) > 1:
                potential_vendor = parts[0]
                if len(potential_vendor) < 30:
                    vendor_name = potential_vendor
        
        transformed_milestones = []
        for m in p['milestones']:
            # Handle evidence
            evidence = None
            if m.get('completions') and len(m['completions']) > 0:
                comp = m['completions'][0]
                if comp.get('evidence') and len(comp['evidence']) > 0:
                    ev = comp['evidence'][0]
                    evidence = {
                        "title": ev['label'] if ev['label'] else "Evidence Submission",
                        "link": ev['anchorUrl'] if ev['anchorUrl'] else "",
                        "transactionHash": "", # We'd need to find this elsewhere
                        "transactionLink": ""
                    }
            
            # Milestone description fallback
            m_desc = m.get('description', '')
            if not m_desc and m.get('completions') and len(m['completions']) > 0:
                m_desc = m['completions'][0].get('description', '')

            transformed_milestones.append({
                "id": m['identifier'],
                "title": m['label'] if m['label'] else f"Milestone {m['identifier']}",
                "amount": int(m['value'][0]['quantity']) / 1_000_000,
                "status": m['status'],
                "unlockDate": "",
                "description": m_desc,
                "evidence": evidence
            })
            
        transformed_projects.append({
            "id": p['identifier'],
            "projectName": p['label'],
            "vendor": vendor_name,
            "totalAmount": round(total_ada, 2),
            "amountSpent": round(spent_ada, 2),
            "status": status,
            "description": p['description'],
            "milestones": transformed_milestones
        })
        
    return transformed_projects

def generate_ts(projects):
    ts_content = """
export interface Milestone {
  id: string;
  title: string;
  amount: number;
  status: string;
  unlockDate: string;
  description: string;
  evidence?: {
    title: string;
    link: string;
    transactionHash?: string;
    transactionLink?: string;
  };
}

export interface IntersectProject {
  id: string;
  projectName: string;
  vendor: string;
  totalAmount: number;
  amountSpent: number;
  status: string;
  description?: string;
  milestones?: Milestone[];
}

export const intersectProjects: IntersectProject[] = """
    
    ts_content += json.dumps(projects, indent=2)
    ts_content += ";"
    
    with open('src/data/intersectData.ts', 'w') as f:
        f.write(ts_content)

if __name__ == "__main__":
    raw = fetch_data()
    data = transform(raw)
    generate_ts(data)
