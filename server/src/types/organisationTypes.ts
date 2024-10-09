import { EUserRole } from '../constant/userConstant'
import { EOrganizationStatus, ESubscriptionPlan } from '../constant/organisationStatusConstant'


export interface IOrganization {                
    name: string;                              
    maxProjects: number;                        
    maxMembers: number;                         
    isActive: boolean;                          
    status: EOrganizationStatus;                
    totalMembersByRole: {                       
        [key in EUserRole]: number;
    };
    subscriptionPlan: ESubscriptionPlan;                   
    subscriptionExpiresAt?: Date;               
    billingDetails?: {
        cardLast4Digits: string | null ; 
        billingEmail: string | null;
    };                         
    projects?: {
        projectId: string | null;
        name: string | null;
        isActive: boolean;
    }[];
    joinSettings?: {
        allowPublicJoin: boolean;
        inviteRequired: boolean;
        autoApprove: boolean;
    };
    tags?: string[];                           
    customFields?: { [key: string]: string };  
    branding?: {
        logoUrl?: string;
        primaryColor?: string | null;
    };
}

export interface ICreateOrganizationRequestBody {
    name: string;                              
    maxProjects: number;                        
    maxMembers: number;
    subscriptionPlan: ESubscriptionPlan;
    joinSettings?: {
        allowPublicJoin?: boolean;
        inviteRequired?: boolean;
        autoApprove?: boolean;
    };
    tags?: string[];
    branding?: {
        logoUrl?: string;
        primaryColor?: string;
    };
    userId: string;
}