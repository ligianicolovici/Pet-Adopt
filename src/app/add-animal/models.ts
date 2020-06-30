export interface PetFormData {
  nrOfPets: number;
  title: string;
  healthCare: boolean;
  foster: boolean;
  adoption: boolean;
  healthCareInstructions?: string;
  fosterDays?: number;
  images?: any[];
  story: string;
}
export interface ContractFormData {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
}
