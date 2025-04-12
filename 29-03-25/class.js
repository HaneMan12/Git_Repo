/*

/Class represents an object


class user {
    id: number;
    username: string;
    password: string;
    role: string;
    createdAt: Date;
    }
  
class course {
    courseID: Number;
    title: string;
    category: string;
    duration: string;
    instructorID: Number;
    createdAt: Date;
    lesson: lessons[];

}

class lessons {
    lessonID: Number;
    title: string;
    courseID: Number;
    createdAt: Date;
    content: string;
    videoURL: string;
    duration: string;
}

class enrolment {
    enrolmentID: Number;
    userID: Number;
    courseID: Number;
    status: string;
    enrolmentDate: Date;
    
}

class grade {
    gradeID: Number;
    userID: Number;
    assessmentID: Number;
    score: Number;
    submissionDate: Date;
    passed: boolean;
    progress: Number;
}

class Assessment {
	assessmentId: string;
	courseId: string;
	title: string;
	questionList: string;
	maxScore: number; 
	passingScore: number;
} 




 function getUserById(role[student]) {
        return users.find(user => user.id === id && user.role === role);
    }

*/ 

function getAverageScore(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]?.score) {
            sum+=arr[i].score;
        }
    }
}

   
  
   

    function getStudents(users) {
        return users.filter(user => user.role === 'student');
    } // Expected output => john_doe

   
   
   for (let i = 0; i <grades.length; i++) {
    console.log(grades[i].score);
   }
   
    function calculateAverage(grades) {
        
   
    }

    function extractVideoUrls(lessons) {
   
    }
