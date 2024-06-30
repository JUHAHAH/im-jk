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
    images: [
      'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg',
    ],
  },
  {
    id: 3,
    title: 'Wheeling Camp',
    description: 'Web designed for camping site.',
    date: '2024.05.17 - 2024.06.27',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDim25Sj5loXJbpYM0NKMZI2geNtFbDme5A&s',
    ],
  },
];
