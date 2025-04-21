
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
  if (type === "organization") return "Organização";
  if (type === "team") return "Equipe";
  if (type === "individual") return "Indivíduo";
  return type.charAt(0).toUpperCase() + type.slice(1);
};

const InfoItem = ({
  icon,
  label,
  value,
  colorClass,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | number;
  colorClass?: string;
}) =>
  value ? (
    <div className="flex items-center gap-3">
      <div className={`flex items-center justify-center p-2 rounded-md ${colorClass ?? "bg-muted"}`}>{icon}</div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-medium text-gray-900">{value}</div>
      </div>
    </div>
  ) : null;

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
  <Card className="divide-y divide-muted">
    {/* Header e Descrição */}
    <CardHeader>
      <CardTitle className="mb-1">Sobre o Recipient</CardTitle>
      <CardDescription>
        {getRecipientTypeLabel(type)}
        {location ? ` em ${location}` : ""}.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Descrição</h3>
        <div className="text-gray-700">
          {description || (
            <span className="italic text-gray-400">
              Nenhuma descrição disponível para este recipient.
            </span>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Rastreabilidade & Informações</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoItem
            icon={<Users className="h-5 w-5 text-blue-500" />}
            label="Funcionários"
            value={numberOfEmployees !== undefined ? numberOfEmployees : undefined}
            colorClass="bg-blue-50"
          />
          <InfoItem
            icon={<Banknote className="h-5 w-5 text-green-600" />}
            label="Capital Social"
            value={capital}
            colorClass="bg-green-50"
          />
          <InfoItem
            icon={<Building className="h-5 w-5 text-yellow-700" />}
            label="Endereço"
            value={address}
            colorClass="bg-yellow-50"
          />
          <InfoItem
            icon={<FileText className="h-5 w-5 text-purple-500" />}
            label="Número de Registro"
            value={registrationNumber}
            colorClass="bg-purple-50"
          />
        </div>
      </div>
      {website && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Website</h3>
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
