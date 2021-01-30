USE employee_trackerdb;

INSERT into department (name) 
values("sales"),
      ("engineering"),
      ("finance"),
      ("legal");

INSERT into role(title, salary, department_id)
values("Sales Lead", 100000.00, 1 ),
	("Salesperson", 80000.00, 1),
    ("Lead Engineer", 1500000.00, 2),
    ("Software Engineer", 1200000.00, 2),
    ("Accountant", 12500000.00,3),
    ("Legal Team Lead", 2500000.00, 3),
    ("Lawyer", 1900000.00, 3);
    
 INSERT into employee (first_name, last_name, role_id, manager_id)
 values ("John", "Doe", 1, NULL),
		("Mike", "Chan",1, NULL),
        ("Ashley", "Rodriguez",2, NULL),
        ("Kevin", "Tupik",2, NULL),
        ("Malia","Brown", 3, NULL),
        ("Sarah", "Lourd",4, NULL),
        ("Tom", "Allen", 4, NULL);
        
UPDATE employee set manager_id =3  WHERE id= 1;
 UPDATE employee set manager_id =1  WHERE id= 2; 
 UPDATE employee set manager_id =3  WHERE id= 4;
 UPDATE employee set manager_id =7  WHERE id= 8;