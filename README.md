# Machine test server
Machine Test NodeJS.
## Getting Started
    git clone https://github.com/sreejithsreeji/machine-test-nodeJS
### Prerequisites
 Nodejs  
 mysql  
 _MySql dump is uploaded in the project root directory.please run the dumb file inorder to make databse._

### Dependencies
create .env file using the format prescribed in the env.json	
		
### Starting environment
 ##### General Questions
    cd cocolabs/generalTest
    node general-questions.js
 ##### Node JS APIs   
    cd cocolabs
    npm install -to install dependencies
    npm start
This will start the server in **localhost:{PORT}**
#### Sample Request
###### UPDATE COMPANY DETAILS
  PUT http://localhost:3000/companies/{companyId}
  sample request
  PUT http://localhost:3000/companies/1

     {
	"name":"asdvgfff"
    }
   ###### RESPONSE  
    {
    "code": 201,
    "message": "Company details updated"
    }
   
   
  ###### ADD PROJECTS
   POST http://localhost:3000/projects
   
        BODY {
	"name":"gdfghfghfghf"
    }

   ###### RESPONSE
      {
    "code": 201,
    "message": "project details saved successfully"
     } 

######ADD EMPLOYEE      
 **POST** http://localhost:3000/companies/add-employee

       BODY {
	"name":"gdfghfghfghf"
    }

    {
    "code": 201,
    "message": "employee details saved successfully"
    }

######Assiging projects to employee      
 **POST** http://localhost:3000/projects/assign-employee

       body {
	"empId":"1",
	"projectId":"2"
    }
    
    {
    "code": 200,
    "message": "Record already exists"
    }
######DELETE A PROJECT     
 **DEL** http://localhost:3000/projects/1

    Response
    {
    "status": 200,
    "message": "Project deleted successfully"
    }  

######GET LIST OF PROJECTS OF SPECIFIC EMPLOYEE     
 **GET** http://localhost:3000/employees/2/projects

 ######GET LIST OF EMPLOYEES OF SPECIFIC PROJECTS     
 **GET** http://localhost:3000/projects/1/employees

  ######GET combained list of employees and their projects     
 **GET** http://localhost:3000/companies/projects
   
      
###  APIs Releated to shops
 ###### find distance between two shops
   GET http://localhost:3000/shops/distance/find?source=1&dest=2
   
 ###### response  
    {
    "code": 200,
    "message": "distance",
    "unit": "km",
    "result": "1.9 KM"
    }
###  APIs form handling
 ###### Register user
  **POST** http://localhost:3000/users/register
   
    BODY multipart/form-data
     {
         name:"sreejith",
         email:"abc@gmail.com",
         phone:"9567122536",
         image:"null"
         }

 ###### response  
    {
    "staus": true,
    "code": 201,
    "message": "user registration completed"
     } 
     //validations added for all fields.
     // all fields are required and standard validations are added
     // file uploading added using multer
    
 

 ###  NOTE
    
          
