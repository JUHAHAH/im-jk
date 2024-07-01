const getAge = (dateString: string) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const birth = getAge('27 Feb 1998 00:00:00 GMT') + '세';

export const aboutMe = {
  bio: [
    { name: 'NAME', detail: '김주하' },
    { name: 'BIRTH', detail: '1998 / 02 / 27 ( ' + birth + ' )' },
    { name: 'MAIL', detail: 'juha0227@gmail.com' },
  ],

  skills: {
    front: [
      { name: 'Stylesheet', detail: '3' },
      { name: '3D', detail: '3' },
      { name: 'Pixel', detail: '3' },
    ],
    back: [
      { name: 'JAVA', detail: '3' },
      { name: 'Javascript', detail: '3' },
      { name: 'SQL', detail: '3' },
    ],
  },
};

export const portfolio = [
  {
    id: 1,
    title: 'Cline',
    description:
      'Apocalypse themed game delevoped for GYAAR Studio Indie Game Contest',
    date: '2023.09.17 - 2023.12.03',
    images: [
      'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    ],
  },
  {
    id: 2,
    title: 'Shoesing',
    description:
      'Website mockup aiming to create realistic shoe shopping experience.',
    date: '2024.04.29 - 2024.05.16',
    detail:
      '<a class="cgreen" href="https://www.canva.com/design/DAGFHgF7lro/3OJj6yzoVXX9rd2KvnqjtQ/edit?utm_content=DAGFHgF7lro&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><b>Link to Canva</b></a><br/><span>Web aiming to practice basic dev skills by creating CRUD based online shopping websites such as Adidas or Nike. Mostly focused on enhancing front-side by implementing 3D features using Spline 3D, also participated in creating administrator page.</span>',
    environment:
      '<table><thead><tr><th>Environment</th><th></th></tr></thead><tbody><tr><td>OS</td><td>Windows</td></tr><tr><td>Language</td><td>Java, JS, HTML5, CSS3, jQuery, Oracle SQL</td></tr><tr><td>Framework / Library</td><td>Bootstrap5, Spring Boot 3.2.5</td></tr><tr><td>DB</td><td>Oracle XE</td></tr><tr><td>Tool</td><td>Spring Tools 4, Spline 3D, DBeaver</td></tr><tr><td>WAS</td><td>Apache Tomcat</td></tr><tr><td>Collaboration</td><td>Github, Notion, ERD Cloud, Draw.io, Figma</td></tr></tbody></table>',
    images: [
      'https://previews.dropbox.com/p/thumb/ACUa9J6PS7RQUmJWrqNGyr_LgpNWsZCGwj5Ubz1hpIxZb0uGsquopJegEpGDATOFX7MCKJ47Cq9F_FeBzkhvT67ZoTCx-r2F-L4kS7i7a1odbyKgqkSXUzRxFISA0ZbG1zmBJg6Pnv5VwXcf9dtmJYVuShuA5XruPko2uDIwOuzwSMwcZQV-4nijHGUrpl3AAWKQsD5dAxV8G934fBQYbxv7RLfU2R3a6KXvqnnR_qSrujAr2Cuzkp31a98f7BhBNpLi8YrQ7qXw99Vr71a7VJ8t3zpkDKDPHm1RsQHvbDKyHGeNq2reQvPlRw9ObIL2av8gQjl_RbDKu4rLsQGN5_IA/p.png',
    ],
  },
  {
    id: 3,
    title: 'Wheeling Camp',
    description: 'Web designed for camping site.',
    date: '2024.05.17 - 2024.06.27',
    detail: '',
    environment:
      '<table><thead><tr><th>Environment</th><th></th></tr></thead><tbody><tr><td>OS</td><td>Windows, Linux</td></tr><tr><td>Language</td><td>Java, JS, HTML5, CSS3, jQuery, Oracle SQL</td></tr><tr><td>Framework / Library</td><td>Bootstrap5, Spring Boot 3.2.5, React.js, MUI</td></tr><tr><td>DB</td><td>Oracle XE, Oracle Cloud</td></tr><tr><td>Tool</td><td>Spring Tools 4, Spline 3D, DBeaver, Postman</td></tr><tr><td>WAS</td><td>Apache Tomcat, AWS, Vercel</td></tr><tr><td>API</td><td>Kakao Map, Kakao Mobility, Open AI, Clova OCR, Login(Kakao, Naver, Google)</td></tr><tr><td>Collaboration</td><td>Github, Notion, ERD Cloud, Draw.io, Figma, Discord, Draw.io</td></tr></tbody></table>',
    images: [
      'https://previews.dropbox.com/p/thumb/ACWne7uYFvIadAigLcZLs6qeIm74gE7lalsVOEqtkLIiRri3oiVtL_87VeyxA4zo3fM8kS_G1Jl4IzZw5p_CtoDyIY9eyqZR4JX0Wf3WycykDE1LS7jC114s6FfiVX9Rk0SGVsC_mY_JBZ0yCXmPF2aV1E4DES7GVlDtTH2Nu4uHdulWEL0RXDpUBJtNtdHPFyW0gYakHU3K6R3qUQGuJEaOrfhj-400THCuEA8UdVQB37GtxBM-KNqg1jrKMbGdqFdtsNxKuj4yC9f4lArxVvsjdxYtf90b-PQRkhCRWiiGOqJHYUlzFScr5k3n6FlasnWaszALXJzC93smyZlqeWiq/p.png',
    ],
  },
];
