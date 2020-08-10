// Import birthday cake
import birthday from '../../assets/img/cakes/birthday/birthday.jpg';
import birthday1 from '../../assets/img/cakes/birthday/birthday1.jpg';
import birthday2 from '../../assets/img/cakes/birthday/birthday2.jpg';
import birthday3 from '../../assets/img/cakes/birthday/birthday3.jpg';
import birthday4 from '../../assets/img/cakes/birthday/birthday4.jpg';

// import cupcake
import cup from '../../assets/img/cakes/cup/cup.jpg';
import cup1 from '../../assets/img/cakes/cup/cup1.jpg';
import cup2 from '../../assets/img/cakes/cup/cup2.jpg';
import cup3 from '../../assets/img/cakes/cup/cup3.jpg';
import cup4 from '../../assets/img/cakes/cup/cup4.jpg';

// import wedding cake
import wedding1 from '../../assets/img/cakes/wedding/wedding1.jpg';
import wedding2 from '../../assets/img/cakes/wedding/wedding2.jpg';
import wedding3 from '../../assets/img/cakes/wedding/wedding3.jpg';
import wedding4 from '../../assets/img/cakes/wedding/wedding4.jpg';
import wedding5 from '../../assets/img/cakes/wedding/wedding5.jpg';
import wedding6 from '../../assets/img/cakes/wedding/wedding6.jpg';


export const birthdayCake = () => {

  return{
    zero: birthday,
    one: birthday1,
    two: birthday2,
    three: birthday3,
    four: birthday4
  }
}

export const cupCake = () => {
  return{
    zero: cup,
    one: cup1,
    two: cup2,
    three: cup3,
    four: cup4
  }
  
}

export const weddingCake = () => {
  return{
    one: wedding1,
    two: wedding2,
    three: wedding3,
    four: wedding4,
    five: wedding5,
    six: wedding6
  }
}

const Cake = () => {
  return{
    wedding: {
      one: {
        src: wedding1,
        name: "Raspberry cake",
        price: "980"
      },
      two: {
        src: wedding2,
        price: "560"
      },
      three: {
        src: wedding3,
        price: "560"
      },
      two: {
        src: wedding2,
        price: "560"
      },
      two: {
        src: wedding2,
        price: "560"
      },
      two: {
        src: wedding2,
        price: "560"
      }
    },

    birthday: {
      one: {
        src: birthday1
      }
    }
  }
}

// const Images = [
//   [
//     {
//       id: 1,
//       src: './../../assets/img/cakes/birthday/birthday.jpg',
//     },
//     {
//       id: 2,
//       src: './../../assets/img/cakes/birthday/birthday2.jpg',
//     },
//     {
//       id: 3,
//       src: './../../assets/img/cakes/birthday/birthday3.jpg',
//     },
//     {
//       id: 4,
//       src: './../../assets/img/cakes/birthday/birthday4.jpg',
//     },
//     {
//       id: 5,
//       src: './../../assets/img/cakes/birthday/birthday5.jpg',
//     },
//   ],
//   [
//     {
//       id: 1,
//       src: './../../assets/img/cakes/cup/cup.jpg',
//     },
//     {
//       id: 2,
//       src: './../../assets/img/cakes/cup/cup1.jpg',
//     },
//     {
//       id: 3,
//       src: './../../assets/img/cakes/cup/cup3.jpg',
//     },
//     {
//       id: 4,
//       src: './../../assets/img/cakes/cup/cup4.jpg',
//     },
//   ],
//   [
//     {
//       id: 1,
//       src: './../../assets/img/other.jpg',
//     },
//     {
//       id: 2,
//       src: './../../assets/img/other2.jpg',
//     },
//     {
//       id: 3,
//       src: './../../assets/img/other3.jpg',
//     },
//     {
//       id: 4,
//       src: './../../assets/img/flat-cake.jpg',
//     },
//   ],
//   [
//     {
//       id: 1,
//       src: './../../assets/img/cakes/wedding/wedding.jpg',
//     },
//     {
//       id: 2,
//       src: './../../assets/img/cakes/wedding/wedding2.jpg',
//     },
//     {
//       id: 3,
//       src: './../../assets/img/cakes/wedding/wedding3.jpg',
//     },
//     {
//       id: 4,
//       src: './../../assets/img/cakes/wedding/wedding4.jpg',
//     },
//     {
//       id: 5,
//       src: './../../assets/img/cakes/wedding/wedding5.jpg',
//     },
//     {
//       id: 6,
//       src: './../../assets/img/cakes/wedding/wedding6.jpg',
//     },
//   ],
// ];

// export default Images;
