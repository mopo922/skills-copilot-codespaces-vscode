function skillsMember() {
  var member = {
    name: 'John',
    skills: ['JavaScript', 'CSS', 'HTML']
  };

  // console.log(member.name);
  // console.log(member.skills[0]);
  // console.log(member.skills[1]);
  // console.log(member.skills[2]);
  // console.log(member.skills.length);
  // console.log(member.skills[member.skills.length - 1]);

  // for (var i = 0; i < member.skills.length; i++) {
  //   console.log(member.skills[i]);
  // }

  // member.skills.forEach(function (skill) {
  //   console.log(skill);
  // });

  // member.skills.forEach(skill => console.log(skill));

  var skillString = member.skills.join(', ');
  console.log(skillString);

  var copyMember = Object.assign({}, member);
  console.log(copyMember);

  var copyMember2 = { ...member };
  console.log(copyMember2);
}