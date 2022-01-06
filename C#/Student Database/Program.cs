using System;
using System.Collections.Generic;

namespace FinalProject
{
    class Program
    {
        
        private const int ADD = 1;
        private const int DELETE = 2;
        private const int EDIT = 3;
        private const int LIST = 4;
        private const int EXIT = 5;
        
        //print menu method 
        static int GetMenuChoice()
        {
            Console.WriteLine("\nStudent Club Management");
            Console.WriteLine("1. Add Student");
            Console.WriteLine("2. Delete");
            Console.WriteLine("3. Edit Student");
            Console.WriteLine("4. List Students");
            Console.WriteLine("5. Exit\n");
            Console.Write("Select an option: ");

            int menuChoice = Convert.ToInt32(Console.ReadLine());

            return menuChoice;
        }
        
        
        static void Main(string[] args)
        {

            //collection 
            StudentClub myClub = new StudentClub();
            
            //get menu choice 
            int option = GetMenuChoice();
            
            if (option < 0)
            {
                Console.WriteLine("Enter a positive whole number");
                option = GetMenuChoice();
            }

            else
            {

                while (option != EXIT)
                {
                    switch (option)
                    {
                        case ADD:
                            myClub.AddNewStudent();
                            break;

                        case DELETE:
                            myClub.DeleteStudent();
                            break;

                        case EDIT:
                            myClub.EditStudent();
                            break;

                        case LIST:
                            myClub.ListAllStudents();
                            break;
                    }

                    option = GetMenuChoice();

                }
            }
        }
    }
}