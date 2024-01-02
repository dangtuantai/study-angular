export interface UserModel {
  id: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  role_id: string;
  status: boolean;
  is_super_user: boolean;
  role?: Role;
}

export interface UpdateUserModel {
  first_name: string;
  last_name: string;
  phone: string;
  role_id: string;
  status: boolean;
  is_super_user: boolean;
}

export interface UserInfoModel extends UserModel {
  created_by: string;
  created_at: Date;
  updated_by?: string;
  updated_at?: Date;
}

export interface Role {
  id: string;
  tenant_id: string;
  created_by: string;
  updated_by: string;
  created_at?: Date;
  updated_at?: Date;
  code: string;
  name: string;
  notes: string;
  dashboards: string;
}