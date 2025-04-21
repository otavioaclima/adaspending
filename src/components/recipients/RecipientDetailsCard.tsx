
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Users, Building, FileText, Banknote } from "lucide-react";

type Props = {
  type: string;
  location?: string;
  website?: string;
  description?: string;
  numberOfEmployees?: number;
  capital?: string;
  address?: string;
  registrationNumber?: string;
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
  numberOfEmployees,
  capital,
  address,
  registrationNumber,
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
      <div className="text-gray-700 mb-4">
        {description || (
          <span className="italic text-gray-400">
            No description available for this recipient yet.
          </span>
        )}
      </div>
      
      <div className="space-y-4 mt-6">
        {(numberOfEmployees || capital || address || registrationNumber) && (
          <h3 className="font-medium text-gray-800 mb-2">Organization Details</h3>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {numberOfEmployees !== undefined && (
            <div className="flex items-start gap-2">
              <div className="bg-blue-50 p-2 rounded-md">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Employees</p>
                <p className="font-medium">{numberOfEmployees}</p>
              </div>
            </div>
          )}
          
          {capital && (
            <div className="flex items-start gap-2">
              <div className="bg-green-50 p-2 rounded-md">
                <Banknote className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Capital</p>
                <p className="font-medium">{capital}</p>
              </div>
            </div>
          )}
          
          {address && (
            <div className="flex items-start gap-2">
              <div className="bg-yellow-50 p-2 rounded-md">
                <Building className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{address}</p>
              </div>
            </div>
          )}
          
          {registrationNumber && (
            <div className="flex items-start gap-2">
              <div className="bg-purple-50 p-2 rounded-md">
                <FileText className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Registration Number</p>
                <p className="font-medium">{registrationNumber}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {website && (
        <div className="flex items-center gap-1 mt-6">
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
