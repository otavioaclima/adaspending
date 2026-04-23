
import React from "react";
import { Info, Calendar, Link2, Building, Users, User } from "lucide-react";

const getVendorTypeLabel = (type: string) => {
  if (type === 'organization') return 'Organization';
  if (type === 'team') return 'Team';
  if (type === 'individual') return 'Individual';
  return type.charAt(0).toUpperCase() + type.slice(1);
};

type VendorHeaderProps = {
  name: string;
  type: string;
  location?: string;
  website?: string;
};

const VendorHeader = ({ name, type, location, website }: VendorHeaderProps) => {
  const VendorIcon =
    type === "organization" ? Building : type === "team" ? Users : User;

  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="bg-cardano-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
        <VendorIcon className="h-8 w-8 text-cardano-blue" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
        <div className="flex items-center gap-2 flex-wrap text-gray-600">
          <span className="capitalize flex items-center gap-1">
            <Info className="h-4 w-4 text-gray-400" />
            {getVendorTypeLabel(type)}
          </span>
          {location && (
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-gray-400" />
              {location}
            </span>
          )}
          {website && (
            <span className="flex items-center gap-1">
              <Link2 className="h-4 w-4 text-gray-400" />
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cardano-blue"
              >
                {getHostname(website)}
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorHeader;
