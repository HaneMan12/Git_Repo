const userData = {
    users: [
      {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        role: "student",
        createdAt: "2023-01-15T08:30:00Z",
      },
      {
        id: 2,
        username: "jane_instructor",
        email: "jane@lms.com",
        role: "instructor",
        createdAt: "2022-06-10T12:00:00Z",
      },
      {
        id: 3,
        username: "admin_user",
        email: "admin@lms.com",
        role: "admin",
        createdAt: "2021-05-01T09:15:00Z",
      },
    ],
    courses: [
      {
        courseId: 101,
        title: "JavaScript Basics",
        description: "Learn the fundamentals of JavaScript.",
        instructorId: 2,
        category: "Programming",
        duration: "4 hours",
        createdAt: "2023-02-01T14:30:00Z",
      },
      {
        courseId: 102,
        title: "Python for Data Science",
        description: "Analyze data using Python libraries.",
        instructorId: 2,
        category: "Data Science",
        duration: "6 hours",
        createdAt: "2023-03-05T10:00:00Z",
      },
      {
        courseId: 103,
        title: "Web Development Bootcamp",
        description: "Learn HTML, CSS, and JavaScript to build modern websites.",
        instructorId: 2,
        category: "Web Development",
        duration: "12 hours",
        createdAt: "2023-01-20T11:45:00Z",
      },
    ],
    lessons: [
      {
        lessonId: 1,
        courseId: 101,
        title: "Introduction to JavaScript",
        content: "Basics of JavaScript syntax and variables.",
        videoUrl: "https://videos.lms.com/js_intro.mp4",
        duration: "30 minutes",
        order: 1,
      },
      {
        lessonId: 2,
        courseId: 101,
        title: "Functions and Loops",
        content: "Understanding functions and loops in JavaScript.",
        videoUrl: "https://videos.lms.com/js_loops.mp4",
        duration: "45 minutes",
        order: 2,
      },
      {
        lessonId: 3,
        courseId: 102,
        title: "Data Analysis with Pandas",
        content: "Exploring data using the Pandas library.",
        videoUrl: "https://videos.lms.com/python_pandas.mp4",
        duration: "60 minutes",
        order: 1,
      },
    ],
    enrollments: [
      {
        enrollmentId: 501,
        userId: 1,
        courseId: 101,
        enrollmentDate: "2023-02-15T08:00:00Z",
        progress: 75,
        status: "in-progress",
      },
      {
        enrollmentId: 502,
        userId: 1,
        courseId: 103,
        enrollmentDate: "2023-03-01T09:30:00Z",
        progress: 25,
        status: "in-progress",
      },
    ],
    assessments: [
      {
        assessmentId: 301,
        courseId: 101,
        title: "JavaScript Quiz",
        questionList: ["What is a closure?", "Explain event bubbling."],
        maxScore: 100,
        passingScore: 60,
      },
      {
        assessmentId: 302,
        courseId: 102,
        title: "Python Data Science Exam",
        questionList: [
          "What is a DataFrame?",
          "Explain data cleaning with Pandas.",
        ],
        maxScore: 100,
        passingScore: 70,
      },
    ],
    grades: [
      {
        gradeId: 801,
        userId: 1,
        assessmentId: 301,
        score: 85,
        passed: true,
        submissionDate: "2023-02-25T14:00:00Z",
      },
      {
        gradeId: 802,
        userId: 1,
        assessmentId: 302,
        score: 55,
        passed: false,
        submissionDate: "2023-03-10T10:30:00Z",
      },
    ],
  };
  
  function getUserRole(specificRole, dataArr) {
    let filteredUser = [];
    let userDetails = [];
    if (dataArr?.users) {
      userDetails = dataArr.users;
    }
    for (let i = 0; i < userDetails.length; i++) {
      if (userDetails[i]?.role === specificRole) {
        filteredUser.push(userDetails[i]);
      }
    }
    return filteredUser;
  }