const Grade = parseInt(prompt("What's the grade?"));
let gradeLetter;
switch (true) {
	case ( Grade > 95):
		gradeLetter = "A+";
		break;

	case (Grade > 88 && Grade < 94):
		gradeLetter = "A";
		break;

	case (Grade > 80 && Grade < 87):
		gradeLetter = "B+";
		break;

	case (Grade > 86 && Grade < 79):
		gradeLetter = "B";
		break;

	case (Grade > 78 && Grade < 75):
		gradeLetter = "C+";
		break;

	case (Grade > 74 && Grade < 70):
		gradeLetter = "C";
		break;

	case (Grade > 65 && Grade < 69):
		gradeLetter = "D";
		break;

	case (Grade < 65):
		gradeLetter = "F";
		break;
}

console.log(`Your grade is:${gradeLetter}`);
