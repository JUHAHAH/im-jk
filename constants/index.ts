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

const birth = getAge('27 Feb 1998 00:00:00 GMT');

export const aboutMe = {
  bio: [
    { name: 'NAME', detail: 'JU HA KIM ( 김주하 )' },
    { name: 'BIRTH', detail: '1998 / 02 / 27 ( ' + birth + ' )' },
    { name: 'LOCATION', detail: 'SEOUL, KOREA' },
  ],

  skills: {
    front: [
      {
        name: 'Stylesheet',
        level: '★★★★',
        detail:
          'Understands basic and advanced CSS, Saas features including animation, transition, and responsive design. Also familiar with Bootstrap, Tailwind CSS, and Figma.',
        icons:
          '<img class="h-10" src="https://skillicons.dev/icons?i=bootstrap,css,figma,html,react,nextjs,sass,tailwind&theme=dark">',
      },
      {
        name: '3D',
        level: '★★',
        detail:
          'Able to implement basic 3D features using Spline 3D, Three.js.',
        icons:
          '<img class="h-10" src="https://skillicons.dev/icons?i=threejs&theme=dark">',
      },
    ],
    back: [
      {
        name: 'JAVA',
        level: '★★★★',
        detail:
          'Able to develope complete application using Java, Spring Boot.',
        icons:
          '<img class="h-10" src="https://skillicons.dev/icons?i=java,eclipse,spring,gradle&theme=dark">',
      },
      {
        name: 'Javascript',
        level: '★★★★★',
        detail:
          'Most used language, familiar with ES6+ features. Can fluently implement RESTful API, and CRUD based web application.',
        icons:
          '<img class="h-10" src="https://skillicons.dev/icons?i=js,ts,react,nextjs,nodejs,npm,yarn,jquery&theme=dark">',
      },
      {
        name: 'Database',
        level: '★★★',
        detail:
          'Experienced SQL based DB like Oracle Cloud DB, Mybatis, JPA. Also tried noSQL based projects using MongoDB, Prisma.',
        icons:
          '<img class="h-10" src="https://skillicons.dev/icons?i=postman,ubuntu,mongodb,vim,mysql&theme=dark">',
      },
    ],
  },
};

export const portfolio = [
  // {
  //   id: 1,
  //   title: 'Cline',
  //   description:
  //     'Apocalypse themed game delevoped for GYAAR Studio Indie Game Contest',
  //   date: '2023.09.17 - 2023.12.03',
  //   images: [
  //     'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
  //   ],
  // },
  {
    id: 2,
    title: 'Shoesing',
    description:
      'Website mockup aiming to create realistic shoe shopping experience.',
    date: '2024.04.29 - 2024.05.16',
    detail:
      '<a class="cgreen border-b-[1px]" href="https://www.canva.com/design/DAGJrTFDVSE/wlqfmX8cjZv9VF3PQEi9oA/edit?utm_content=DAGJrTFDVSE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><b>Link to Canva</b></a><br/><span>Web aiming to practice basic dev skills by creating CRUD based online shopping websites such as Adidas or Nike.<br/> Mostly focused on enhancing front-side by implementing 3D features using Spline 3D, also participated in creating administrator page.</span>',
    environment:
      '<table><thead><tr><th>Environment</th><th></th></tr></thead><tbody><tr><td>OS</td><td>Windows</td></tr><tr><td>Language</td><td>Java, JS, HTML5, CSS3, jQuery, Oracle SQL</td></tr><tr><td>Framework / Library</td><td>Bootstrap5, Spring Boot 3.2.5</td></tr><tr><td>DB</td><td>Oracle XE</td></tr><tr><td>Tool</td><td>Spring Tools 4, Spline 3D, DBeaver</td></tr><tr><td>WAS</td><td>Apache Tomcat</td></tr><tr><td>Collaboration</td><td>Github, Notion, ERD Cloud, Draw.io, Figma</td></tr></tbody></table>',
    images: [
      'https://www.dropbox.com/scl/fi/v0s7bus7sce2ax7ophp5t/thumbnail.png?rlkey=ndvzs157r4jyxz1tnnmmnuwpl&st=p3ko43o0&raw=1',
    ],
  },
  {
    id: 3,
    title: 'Wheeling Camp',
    description: 'Web designed for camping site.',
    date: '2024.05.17 - 2024.06.27',
    detail:
      '<a class="cgreen border-b-[1px]" href="https://www.canva.com/design/DAGJreu6nfU/fefVM12MeNatNprZI6NiqA/edit?utm_content=DAGJreu6nfU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><b>Link to Canva</b></a><br/><span>Car camping supply online store with basic shopping principles (Car/Product Rental, Review Board, Working Payment System).<br/> Mostly focused in minor self-project that recommends camping-focused driving route by combining Open APIs function call logic with basic Kakao Map/ Kakao Mobility API.<br/> Also implemented administrator website, separated from base (Spring) web, using React.js framework.<br />Deployed on Vercel and Amazon Web Service (AWS),</span>',
    environment:
      '<table><thead><tr><th>Environment</th><th></th></tr></thead><tbody><tr><td>OS</td><td>Windows, Linux</td></tr><tr><td>Language</td><td>Java, JS, HTML5, CSS3, jQuery, Oracle SQL</td></tr><tr><td>Framework / Library</td><td>Bootstrap5, Spring Boot 3.2.5, React.js, MUI</td></tr><tr><td>DB</td><td>Oracle XE, Oracle Cloud</td></tr><tr><td>Tool</td><td>Spring Tools 4, Spline 3D, DBeaver, Postman</td></tr><tr><td>WAS</td><td>Apache Tomcat, AWS, Vercel</td></tr><tr><td>API</td><td>Kakao Map, Kakao Mobility, Open AI, Clova OCR, Login(Kakao, Naver, Google)</td></tr><tr><td>Collaboration</td><td>Github, Notion, ERD Cloud, Draw.io, Figma, Discord, Draw.io</td></tr></tbody></table>',
    images: [
      'https://www.dropbox.com/scl/fi/qa5bjiovicxmxs61g0fik/thumbnail.png?rlkey=k8jngab4ysp170b7vm5hhgbnu&st=wm7ytwiz&raw=1',
    ],
  },
];
