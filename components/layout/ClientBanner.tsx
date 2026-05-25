"use client";

interface ClientBannerProps {
  companyName: string;
}

export default function ClientBanner({ companyName }: ClientBannerProps) {
  return (
    <div className="w-full bg-vow-primary py-2.5 px-6 text-center">
      <p className="text-white text-sm font-medium">
        Esta página foi preparada exclusivamente para a equipe da{" "}
        <span className="font-bold">{companyName}</span>
      </p>
    </div>
  );
}
