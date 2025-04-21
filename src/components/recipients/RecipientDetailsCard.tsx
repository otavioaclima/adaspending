
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

type Props = {
  type: string;
  location?: string;
  website?: string;
  description?: string;
};

const getRecipientTypeLabel = (type: string) => {
  if (type === "organization") return "Organization";
  if (type === "team") return "Team";
  if (type === "individual") return "Individual";
  return type.charAt(0).toUpperCase() + type.slice(1);
};

const RecipientDetailsCard = ({
  type,
  location,
  website,
  description,
}: Props) => (
  <Card>
    <CardHeader>
      <CardTitle>About</CardTitle>
      <CardDescription>
        This is a {getRecipientTypeLabel(type)}
        {location ? ` based in ${location}` : ""}.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-gray-700 mb-2">
        {description || (
          <span className="italic text-gray-400">
            No description available for this recipient yet.
          </span>
        )}
      </div>
      {website && (
        <div className="flex items-center gap-1 mt-4">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cardano-blue underline break-all"
          >
            {website}
          </a>
        </div>
      )}
    </CardContent>
  </Card>
);

export default RecipientDetailsCard;
