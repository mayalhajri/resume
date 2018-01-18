var DATA = '%data%';

var bio = {
  name: 'May N.Alhajri',
  role: 'Front End Student',
  contacts: {
    mobile: '+966 509095811',
    email: 'mayalhajri94@gmail.com',
    github: 'mayalhajri',
    twitter: '@M9_Geek',
    location: 'Saudi Arabia'
  },
  welcomeMessage: 'Network and Telecommunications system  ' +
                  'Graduat Student from Princess Nora bint Abdul Rahman University PNU '
                 + 'information_technology IT ' +
                  'Android_developer ' +
                  'Web_developers.',
  skills: ['HTML', 'CSS', 'JavaScript','MySQL', 'Android developer',
           'Web developers', 'Adobe Photoshop', 'Front-end Development'],
  biopic: 'images/me.jpg',
    
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': 'Princess Nora bint Abdul Rahman University',
      'location': 'Riyadh , Saudi Arabia',
      'degree': 'Bachelor of Computer (BSc.), Network and Telecommunications system',
      'majors': ['Network and Telecommunications system'],
      'dates': '2012 - 2017',
      'url': 'http://www.pnu.edu.sa/arr/Pages/default.aspx'
    }
  ],
  onlineCourses: [
   {
     'title': 'Android Basics by Google Nanodegree Program',
     'school': 'Udacity Connect in partnership with Mask Foundation',
     'dates': 'Jul 2017',
     'url': 'https://sa.udacity.com'
   },
   {
     'title': 'Connect Intensive - Front-End Web Developer Nanodegree Program',
     'school': 'Udacity Connect in partnership with Mask Foundation',
     'dates': 'Nov 2017',
     'url': 'https://sa.udacity.com'
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name).replace('#', education.schools[i].url);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

var work = {
  jobs: [
    {
      employer: 'Saudi Electronic University',
      title: 'Trainee at network department ',
      location: 'Saudi Arabia',
      dates: 'JUL 2016 - MAY 2016',
      description: 'The subjects were covered in the training:' +
                   'Introduction About Training ' +
                   'Network Protocols' +
                   'Network Design ' +
                   'Network Troubleshooting ' +
                   'Network Configuration  ' +
                   'Voice and Wireless',
    'url': 'https://www.seu.edu.sa/sites/ar/Pages/main.aspx'
    },
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
          var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer).replace('#', work.jobs[i].url);

        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};

var projects = {
  projects: [
    {
      'title': 'Music App',
      'dates': 'July 2017',
      'description': 'This project is a chance for you to combine and practice everything you  ' +
                     'learned in this section of the Nanodegree program. You will be making the  ' +
                     'structure of a music app using intents and empty activities. The goal is to  ' +
                     'design and create the structure of a Music app which would allow a user to '
        + 'play audio files. There are many music player apps, and they make a wide variety of design '+
        'choices. It will be your job to decide what kind of music app your structure would turn into '+
        'and build out that structure using intents. Will you build an app to play music from the user’s'+
        ' library of music? Will you build an app to stream random songs from a database? Will you build '+
        'a musical suggestion engine? Those choices are up to you!',
      'images': ['images/music_app.png']
    },
    {
      'title': 'Score Keeper App',
      'dates': 'July 2017',
      'description': 'This project is a chance for you to combine and practice everything you  ' +
                     'learned in this section of the Nanodegree program. You will be making an  ' +
                     'app that allows a user to keep track of points within a game. The goal is.' +
                     ' to create an Score Keeper app which gives a user the ability to keep track of  ' +
                     'the score of two different teams playing a game of your choice. To build this  ' +
                     'project, you can follow along with the practice set and customize the Court '+
                    'Counter app to track scores from a different sportn.',
      'images': ['images/scoreKeeperApp.png']
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
