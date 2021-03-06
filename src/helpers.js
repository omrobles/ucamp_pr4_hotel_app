import img1 from "./media/lily-banse--YHSwy6uqvk-unsplash.jpg";
import img2 from "./media/engin-akyurt-ZbzYDboN7fg-unsplash.jpg";
import img3 from "./media/iglesia-de-santa-rosa.jpg";
import roomImg1 from "./media/point3d-commercial-imaging-ltd-5BV56SdvLmo-unsplash.jpg";
import roomImg2 from "./media/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import roomImg3 from "./media/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg";
import roomImg4 from "./media/mky-moody-AUF6Gl4wwzA-unsplash.jpg";
import serImg1 from "./media/brooke-lark-HlNcigvUi4Q-unsplash.jpg";
import serImg2 from "./media/paulo-almeida-157NwUNEdxQ-unsplash.jpg";
import serImg3 from "./media/susan-wilkinson-wG1FPyeO75Y-unsplash.jpg";
import serImg4 from "./media/point3d-commercial-imaging-ltd-TEbVwp3WC0E-unsplash.jpg";
import actImg1 from "./media/bernal-2.jpg";
import actImg2 from "./media/istockphoto-486420378-612x612-1.jpg";

const imagesCaruosel = [img1, img2, img3];

const roomsInfo = [
  {
    type: "Deluxe Suite",
    description:
      "Habitación con un espacio interior superior a todas nuestras habitaciones. Perfecta para largas estadias por todas sus amenidades.",
    image: roomImg1,
  },
  {
    type: "Senior Suite",
    description:
      "Habitación con cama King Size perfecta para esa escapada de fin de semana. Gran espacio para un gran descanso.",
    image: roomImg2,
  },
  {
    type: "Junior Suite",
    description:
      "Habitación con cama Queen Size para un descanso comodo. Ya sea viaje de negocios o vacaciones en esta habitación tu descanso estara asegurado.",
    image: roomImg3,
  },
  {
    type: "Twins Suite",
    description:
      "Habitación con dos camas Queen Size para ese viaje en familia.",
    image: roomImg4,
  },
];

const activitiesInfo = [
  {
    title: "Peña de Bernal",
    text: "No puedes visitar Bernal, sin dar un paseo alrededor de su gigantesco monolito, uno de los más grandes del mundo, y el cual –dicen- provee a sus pobladores de energía vital. Durante el equinoccio de primavera locales y viajeros la visitan para recargarse de vida.",
    image: actImg1,
  },
  {
    title: "Vida Nocturna",
    text: "La buena vida nocturna de Querétaro se conjuga con su historia, arquitectura y cultura, teniendo elegantes restaurantes para disfrutar los platillos con una buena copa de vino, las noches en sus plazas con expresiones culturales, así como los bares y discotecas para divertirse al ritmo de la buena música y el alegre ambiente que comparten los queretanos.",
    image: actImg2,
  },
];

const servicesInfo = [
  {
    title: "Restaurant",
    description:
      "Experiencia única de aromas y sabores, teniendo como base la Alta Cocina Mexicana e Internacional para una perfecta apreciación de sabores.",
    image: serImg1,
  },
  {
    title: "Alberca",
    description:
      "Nuestra gran alberca al aire libre, con snack bar, es el lugar perfecto para pasar el día.",
    image: serImg2,
  },
  {
    title: "Spa",
    description:
      "Una visita a nuestro spa le transportará a un lugar de total serenidad. Reserve uno de nuestros masajes exclusivos a través de la recepcionista del spa.",
    image: serImg3,
  },
  {
    title: "Gimnasio",
    description:
      "Conecte su cuerpo y su mente en nuestras instalaciones deportivas. Equipado con aparatos nuevos, nuestro espacio le proporcionará innumerables opciones para permanecer activo mientras usted está ausente.",
    image: serImg4,
  },
];

export { imagesCaruosel, roomsInfo, servicesInfo, activitiesInfo };
