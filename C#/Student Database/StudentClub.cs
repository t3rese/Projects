using System;
using System.Collections.Generic;

namespace FinalProject
{
    public class StudentClub
    {

        private static List<Student> allStudents = new List<Student>();
        
        //add student 
        public void AddNewStudent()
        {
            //prompt for first name, last name, email 
            Console.Write("Enter first name: ");
            string studentFirstName = Console.ReadLine();
            Console.Write("Enter last name: ");
            string studentLastName = Console.ReadLine();
            Console.Write("Enter email: ");
            string studentEmail = Console.ReadLine();
            
            //create student object 
            Student addStudent = new Student(studentFirstName, studentLastName, studentEmail);
            
            //add to list 
            allStudents.Add(addStudent);

            Console.Write("Student Added Successfully\n");
        }
        
        //Delete student
        public void DeleteStudent()
        {
            if (allStudents.Count == 0)
            {
                Console.WriteLine("There are no students in the club");     
            }
            
            else
            {
                //print list of all students 
                ListAllStudents();
                
                //prompt for student to delete 
                Console.Write("Select student # to delete: ");
                int studentNumber = Convert.ToInt32(Console.ReadLine());
                
                //remove selected student from all students list 
                allStudents.RemoveAt(studentNumber - 1);

                Console.WriteLine("Student Deleted Successfully");
            }
            
        }
                
        //Edit student 
        public void EditStudent()
        {
            if (allStudents.Count == 0)
            {
                Console.WriteLine("\nThere are no students in the club");
            }
        
            else
            {
                //print list of all students 
                ListAllStudents();
                
                //prompt for student to edit
                Console.Write("Select student # to edit: ");
                int studentNumber = Convert.ToInt32(Console.ReadLine());
                
                //delete selected student 
                allStudents.RemoveAt(studentNumber - 1);
                //prompt for new information               
                //prompt for first name, last name, email 
                Console.Write("Enter first name: ");
                string studentFirstName = Console.ReadLine();
                Console.Write("Enter last name: ");
                string studentLastName = Console.ReadLine();
                Console.Write("Enter email: ");
                string studentEmail = Console.ReadLine();
            
                //create student object 
                Student addStudent = new Student(studentFirstName, studentLastName, studentEmail);
            
                //add to list 
                allStudents.Add(addStudent);

                Console.Write("Student Edited Successfully");
            }
        }
        
        //List students
        public void ListAllStudents()
        {
            if (allStudents.Count == 0)
            {
                Console.WriteLine("There are no students in the club");     
            }
        
            for (int i = 0; i < allStudents.Count; i++)
            {
                Student aStudent = allStudents[i];
                Console.WriteLine($"{i + 1}. {aStudent.ToString()}");
            }
        }
        
    }
}