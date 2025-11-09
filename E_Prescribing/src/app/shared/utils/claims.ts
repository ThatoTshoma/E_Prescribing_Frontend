export const claim = {
  admin: (c: any) => c.role == "Admin",
  nurse:  (c: any) => c.role == "Nurse",
  pharmacist: (c: any) => c.role == "Pharmacist",
  surgeon:  (c: any) => c.role == "Surgeon",
  anaesthesiologist :  (c: any) => c.role == "Anaesthesiologist",
}