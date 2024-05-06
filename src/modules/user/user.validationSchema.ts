import { z } from "zod";

export const zodAdminCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    nid: z.string(),
    name: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.string().optional(),
    guardianAddress: z.string(),
  }),
});

export const zodModaretorCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    nid: z.string(),
    name: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.string(),
    guardianAddress: z.string(),
  }),
});

export const zodInterviewerCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    nid: z.string(),
    name: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.string(),
    guardianAddress: z.string(),
  }),
});

export const zodSelectorCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    nid: z.string(),
    name: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.string(),
    guardianAddress: z.string(),
  }),
});

//clients

export const zodCompanyCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    company: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
  }),
});

export const zodApplicantCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    nid: z.string(),
    name: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.string(),
    guardianAddress: z.string(),
  }),
});
