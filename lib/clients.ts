export interface ClientData {
  slug: string;
  companyName: string;
  companyLocation: string;
  heroTag: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
}

export const CLIENTS: Record<string, ClientData> = {};
