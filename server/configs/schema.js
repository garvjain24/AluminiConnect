// create table donationProjects having 
// projectName as varchar ,
//  accountName as varchar , 
//  details as varchar , 
//  projectHead as varchar , 
//  upiId as url (choosethe appropriate data type) , 

import { pgTable, serial, varchar,  boolean , text } from "drizzle-orm/pg-core";

export const DonationProjects = pgTable('donationProjects', {
    id: serial('id').primaryKey(),
    projectName: varchar('projectName').notNull(),
    accountName: varchar('accountName').notNull(),
    details: text('donationDetails').notNull(),
    projectHead: varchar('projectHead').notNull(),
    upiId: varchar('upiId').notNull()  // You can store URLs in varchar for UPI IDs.
});


export const StudentData = pgTable('studentData', {
    id: serial('id').primaryKey(),  // Automatically generated ID
    fname: varchar('fname').notNull(),
    lname: varchar('lname').notNull(),
    email: varchar('email').notNull(),
    rollNo: varchar('rollNo').notNull(),
    startYear: varchar('startYear').notNull(),
    endYear: varchar('endYear').notNull(),
    isMentor: boolean('isMentor').default(false),  
    mentorshipStartYear: varchar('mentorshipStartYear')
});

export const AlumniEvent = pgTable('alumniEvent', {
    id: serial('id').primaryKey(),
    eventName: varchar('eventName').notNull(),
    details: text('details').notNull(),
    date: varchar('date').notNull(),
    time: varchar('time').notNull(),
    eventDetails: text('eventDetails')
});
