var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
     :  `Unfortunately you are not eligible for interview`;
     console.log(result);
 }
 
 interviewEligibility(80, 86, 90, 'Mahi');
 interviewEligibility(70, 65, 55, 'Gill');
 interviewEligibility(60, 79, 88, 'Stew');