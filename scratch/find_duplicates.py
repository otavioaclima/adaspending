
import re

with open('src/contexts/LanguageContext.tsx', 'r') as f:
    content = f.read()

languages = ['EN', 'PT', 'ES', 'JP']
for lang in languages:
    # Find the block start
    start_marker = f'{lang}: {{'
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print(f"Could not find start for {lang}")
        continue
    
    # Find the matching closing brace
    brace_count = 0
    end_idx = -1
    for i in range(start_idx + len(start_marker) - 1, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_idx = i
                break
    
    if end_idx != -1:
        block = content[start_idx:end_idx+1]
        keys = re.findall(r"'(.*?)':", block)
        seen = set()
        duplicates = []
        for key in keys:
            if key in seen:
                duplicates.append(key)
            seen.add(key)
        if duplicates:
            print(f"Duplicates in {lang}: {duplicates}")
        else:
            print(f"{lang} is clean")
