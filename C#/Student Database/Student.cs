using System;

namespace FinalProject
{
    public class Student
    {
        private string firstName;
        public string FirstName //property 
        {
            get { return firstName; }
            set { firstName = value; }
        }

        private string lastName;
        public string LastName //property 
        {
            get { return lastName; }
            set
            { lastName= value; }
        }

        private string email;
        public string Email //property 
        {
            get { return email;}
            set { email= value; }
        } 
        
        //constructor 
        public Student(string myFirstName, string myLastName, string myEmail)
        {
            firstName = myFirstName;
            lastName = myLastName;
            email = myEmail; 
        }
        
        //ToString method 
        public override string ToString()
        {
            return String.Format($"{firstName} {lastName} | {email}");
        }
        
        
    }
}