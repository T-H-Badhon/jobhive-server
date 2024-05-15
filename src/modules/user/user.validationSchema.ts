import { EmploymentStatus, UserStatus } from "@prisma/client";
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
    address: z.string(),
  }),
});

export const zodApplicantCreateSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    name: z.string(),
    contactNo: z.string(),
    married: z.boolean(),
    address: z.string(),
    employmentStatus: z.enum([
      EmploymentStatus.WORKING,
      EmploymentStatus.UNEMPLOYED,
    ]),
    graduated: z.boolean(),
  }),
});

export const zodChangeStatusSchema = z.object({
  body: z.object({
    status: z.enum([UserStatus.ACTIVE, UserStatus.BLOCKED, UserStatus.DELETED]),
  }),
});
