export interface peoples {
  code: number;
  current_page: number;
  data: peopleData[];
  total:number
}
export interface peopleData {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email_id: string;
  mobile_no: string;
  dob: string;
  gender: string;
  address: string;
  languages_known: string;
  created_at: string;
  status:string
  updated_at: string;
}
