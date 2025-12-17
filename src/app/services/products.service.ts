import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private albums: Album[] = [
    {
      id: 1,
      title: '1st EP NEWJEANS (Bluebook Ver.)',
      price: 150.00,
      imageUrl: 'assets/images/bluebook-ver.png',
      description: 'O EP de estreia do NewJeans, conhecido como Bluebook, traz uma estética única que remete a revistas adolescentes dos anos 2000. Inclui os hits "Attention", "Hype Boy", "Cookie" e "Hurt".',
      category: 'album',
      versions: [
        { name: 'Minji', imageUrl: 'assets/images/bluebook-minji.png' },
        { name: 'Hanni', imageUrl: 'assets/images/bluebook-hanni.png' },
        { name: 'Danielle', imageUrl: 'assets/images/bluebook-danielle.png' },
        { name: 'Haerin', imageUrl: 'assets/images/bluebook-haerin.png' },
        { name: 'Hyein', imageUrl: 'assets/images/bluebook-hyein.png' },
        { name: 'Group', imageUrl: 'assets/images/bluebook-group.png' }
      ],
      hasSetOption: true,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/bluebook-ver.png', 
        'assets/images/bluebook-inclusions-1.png', 
        'assets/images/bluebook-inclusions-2.png',
        'assets/images/bluebook-inclusions-3.png',
        'assets/images/bluebook-inclusions-4.png'
      ]
    },
    {
      id: 2,
      title: '1st EP NEWJEANS (Weverse Album Ver.)',
      price: 85.00,
      imageUrl: 'assets/images/nj-weverse-ver.png',
      description: 'Versão compacta e digital do EP de estreia. Acesso ao álbum via aplicativo Weverse Albums, focado em photocards e conteúdo digital exclusivo.',
      category: 'album',
      versions: [
        { name: 'Weverse Ver.', imageUrl: 'assets/images/nj-weverse-ver.png' },
      ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/nj-weverse-ver.png', 
        'assets/images/nj-weverse-ver-inclusions.png', 
      ]
    },
    {
      id: 3,
      title: '1st EP NEWJEANS (Bag ver.)',
      price: 180.00,
      imageUrl: 'assets/images/nj-bag-ver.png',
      description: 'Edição limitada do EP de estreia que acompanha uma bolsa exclusiva com o branding do NewJeans. Disponível em três cores icônicas.',
      category: 'album',
      versions: [
        { name: 'Black', imageUrl: 'assets/images/nj-bag-ver-black.png' },
        { name: 'White', imageUrl: 'assets/images/nj-bag-ver-white.png' },
        { name: 'Red', imageUrl: 'assets/images/nj-bag-ver-red.png' },
      ],
      hasSetOption: false,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/nj-bag-ver.png',
        'assets/images/nj-bag-ver-inclusions.png'
      ]
    },
    {
      id: 4,
      title: 'OMG (Weverse Album Ver.)',
      price: 85.00,
      imageUrl: 'assets/images/weverse-album-ver-omg.png',
      description: 'Single álbum "OMG" em formato Weverse Album. Inclui QR card para acesso a conteúdo digital e photocards aleatórios.',
      category: 'album',
      versions: [
        { name: 'Weverse Album Ver.' }
      ],
      hasSetOption: true,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/weverse-album-ver-omg.png',
        'assets/images/weverse-album-ver-omg-inclusions.png'
      ]
    },
    {
      id: 5,
      title: 'OMG (Message Card Ver.)',
      price: 140.00,
      imageUrl: 'assets/images/message-card-ver-omg.png',
      description: 'Versão especial do single "OMG" contendo cartões de mensagem escritos pelas membros, além de photocards e adesivos.',
      category: 'album',
      versions: [
        { name: 'Minji', imageUrl: 'assets/images/message-card-minji.png' },
        { name: 'Hanni', imageUrl: 'assets/images/message-card-hanni.png' },
        { name: 'Danielle', imageUrl: 'assets/images/message-card-danielle.png' },
        { name: 'Haerin', imageUrl: 'assets/images/message-card-haerin.png' },
        { name: 'Hyein', imageUrl: 'assets/images/message-card-hyein.png' },
        { name: 'Group', imageUrl: 'assets/images/message-card-group.png' }
      ],
      hasSetOption: true,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/message-card-ver-omg.png',
        'assets/images/message-card-inclusions-1.png',
        'assets/images/message-card-inclusions-2.png',
        'assets/images/message-card-inclusions-3.png',
        'assets/images/message-card-inclusions-4.png',
        'assets/images/message-card-inclusions-5.png'
      ]
    },
    {
      id: 6,
      title: '2nd EP GET UP (Bunny Beach Bag Ver.)',
      price: 195.00,
      imageUrl: 'assets/images/bunny-beach-bag-ver.png',
      description: 'O aclamado EP "Get Up" em uma edição de verão imperdível. Acompanha uma bolsa de praia em formato de coelho (Bunny Beach Bag).',
      category: 'album',
      versions: [
        { name: 'Minji', imageUrl: 'assets/images/bunny-minji.png' },
        { name: 'Hanni', imageUrl: 'assets/images/bunny-hanni.png' },
        { name: 'Danielle', imageUrl: 'assets/images/bunny-danielle.png' },
        { name: 'Haerin', imageUrl: 'assets/images/bunny-haerin.png' },
        { name: 'Hyein', imageUrl: 'assets/images/bunny-hyein.png' },
        { name: 'Group', imageUrl: 'assets/images/bunny-group.png' }
      ],
      hasSetOption: false,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/bunny-beach-bag-ver.png',
        'assets/images/bunny-inclusions-1.png'
      ]
    },
    {
      id: 7,
      title: '2nd EP GET UP (NJ Box Ver.)',
      price: 165.00,
      imageUrl: 'assets/images/nj-box-ver.png',
      description: 'Edição de colecionador do EP "Get Up" em formato de caixa (Box). Design limpo e minimalista, focado na experiência de unboxing.',
      category: 'album',
      versions: [
        { name: 'Ver. A', imageUrl: 'assets/images/nj-box-ver-a-b.png' },
        { name: 'Ver. B', imageUrl: 'assets/images/nj-box-ver-a-b.png' }
      ],
      hasSetOption: true,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/nj-box-ver.png',
        'assets/images/nj-box-inclusions-1.png',
        'assets/images/nj-box-inclusions-2.png',
      ]
    },
    {
      id: 8,
      title: '2nd EP GET UP (Weverse Album Ver.)',
      price: 85.00,
      imageUrl: 'assets/images/weverse-album-ver-getup.png',
      description: 'Versão Weverse do EP "Get Up". Compacta e ecológica, oferece acesso total às músicas e conteúdos digitais através de QR Code.',
      category: 'album',
      versions: [
        { name: 'Ver. A', imageUrl: 'assets/images/weverse-album-ver-getup-a.png' },
        { name: 'Ver. B', imageUrl: 'assets/images/weverse-album-ver-getup-b.png' },
        { name: 'Ver. C', imageUrl: 'assets/images/weverse-album-ver-getup-c.png' }
      ],
      hasSetOption: true,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/weverse-album-ver-getup.png',
        'assets/images/weverse-album-ver-getup-inclusions.png'
      ]
    },
    {
      id: 9,
      title: 'How Sweet (Standard Ver.)',
      price: 130.00,
      imageUrl: 'assets/images/how-sweet-std.png',
      description: 'Single álbum "How Sweet" em sua versão standard. Visual retro e vibrante, acompanha photobook, CD e photocards variados.',
      category: 'album',
      versions: [
        { name: 'Minji', imageUrl: 'assets/images/how-sweet-minji.png' },
        { name: 'Hanni', imageUrl: 'assets/images/how-sweet-hanni.png' },
        { name: 'Danielle', imageUrl: 'assets/images/how-sweet-danielle.png' },
        { name: 'Haerin', imageUrl: 'assets/images/how-sweet-haerin.png' },
        { name: 'Hyein', imageUrl: 'assets/images/how-sweet-hyein.png' },
        { name: 'Group', imageUrl: 'assets/images/how-sweet-std-group.png' }
      ],
      hasSetOption: false,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/how-sweet-std.png',
        'assets/images/how-sweet-inclusions-1.png',
        'assets/images/how-sweet-inclusions-2.png'
      ]
    },
    {
      id: 10,
      title: 'How Sweet (Weverse Album Ver.)',
      price: 90.00,
      imageUrl: 'assets/images/how-sweet-weverse-ver.png',
      description: 'Versão Weverse do single "How Sweet". Ideal para colecionadores de photocards que preferem um formato mais portátil.',
      category: 'album',
      versions: [
        { name: 'Ver. A', imageUrl: 'assets/images/how-sweet-weverse-ver-a.png' },
        { name: 'Ver. B', imageUrl: 'assets/images/how-sweet-weverse-ver-b.png' },
        { name: 'Ver. C', imageUrl: 'assets/images/how-sweet-weverse-ver-c.png' },
      ],
      hasSetOption: true,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/how-sweet-weverse-ver.png',
        'assets/images/how-sweet-weverse-ver-inclusions.png'
      ]
    },
    {
      id: 11,
      title: 'Supernatural NJ X MURAKAMI (Drawstring Bag ver.)',
      price: 160.00,
      imageUrl: 'assets/images/supernatural-drawstring-bag-ver.png',
      description: 'Colaboração especial NewJeans x Murakami. Esta versão acompanha uma bolsa tipo "Drawstring" com arte exclusiva do artista Takashi Murakami.',
      category: 'album',
      versions: [
        { name: 'Drawstring Bag Ver.' }
      ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/supernatural-drawstring-bag-ver.png',
        'assets/images/supernatural-drawstring-bag-inclusions.png'
      ]
    },
    {
      id: 12,
      title: 'Supernatural NJ X MURAKAMI (Cross Bag ver.)',
      price: 175.00,
      imageUrl: 'assets/images/supernatural-cross-bag-ver.png',
      description: 'Colaboração icônica NewJeans x Murakami. A versão Cross Bag é um item de moda statement, unindo o estilo do grupo com a arte pop de Murakami.',
      category: 'album',
      versions: [
        { name: 'Minji', imageUrl: 'assets/images/supernatural-cross-bag-minji.png' },
        { name: 'Hanni', imageUrl: 'assets/images/supernatural-cross-bag-hanni.png' },
        { name: 'Danielle', imageUrl: 'assets/images/supernatural-cross-bag-danielle.png' },
        { name: 'Haerin', imageUrl: 'assets/images/supernatural-cross-bag-haerin.png' },
        { name: 'Hyein', imageUrl: 'assets/images/supernatural-cross-bag-hyein.png' }
      ],
      hasSetOption: false,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/supernatural-cross-bag-ver.png',
        'assets/images/supernatural-cross-bag-inclusions.png'
      ]
    },
    {
      id: 13,
      title: 'Supernatural (Weverse album ver.)',
      price: 90.00,
      imageUrl: 'assets/images/supernatural-weverse-ver.png',
      description: 'Versão Weverse do single japonês "Supernatural". Focado em photocards e conteúdo digital, com arte da colaboração com Murakami.',
      category: 'album',
      versions: [
        { name: 'Ver. A', imageUrl: 'assets/images/supernatural-weverse-album-ver-a.png' },
        { name: 'Ver. B', imageUrl: 'assets/images/supernatural-weverse-album-ver-b.png' },
        { name: 'Ver. C', imageUrl: 'assets/images/supernatural-weverse-album-ver-c.png' },
      ],
      hasSetOption: true,
      hasRandomOption: true,
      inclusionImages: [
        'assets/images/supernatural-weverse-ver.png',
        'assets/images/supernatural-weverse-ver-inclusions.png'
      ]
    },
    {
      id: 14,
      title: 'Official LightStick: Binky Bong',
      price: 350.00,
      imageUrl: 'assets/images/lightstick.png',
      description: 'O Lightstick oficial do NewJeans, carinhosamente chamado de "Binky Bong". Essencial para shows e eventos, com conectividade Bluetooth.',
      category: 'lightstick',
      versions: [
        { name: 'Binky Bong', imageUrl: 'assets/images/lightstick.png' },
      ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/lightstick.png',
        'assets/images/lightstick-inclusions.png'
      ]
    },
    {
      id: 15,
      title: 'Season Greetings 2023',
      price: 250.00,
      imageUrl: 'assets/images/season-greetings-2023.png',
      description: 'Pacote de boas-vindas ao ano de 2023 do NewJeans. Inclui calendário, diário, photobook e diversos itens de papelaria exclusivos.',
      category: 'season-greetings',
      versions: [
        { name: 'Season Greetings 2023', imageUrl: 'assets/images/season-greetings-2023.png' },
      ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/season-greetings-2023.png',
        'assets/images/season-greetings-2023-inclusions.png'
      ]
    },
    {
      id: 16,
      title: 'Season Greetings 2024',
      price: 260.00,
      imageUrl: 'assets/images/season-greetings-2024.png',
      description: 'Celebre 2024 com o NewJeans! O Season\'s Greetings deste ano traz um conceito aconchegante e caseiro, repleto de itens para organizar seu ano.',
      category: 'season-greetings',
      versions: [
        { name: 'Season Greetings 2024', imageUrl: 'assets/images/season-greetings-2024.png' },
      ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/season-greetings-2024.png',
        'assets/images/season-greetings-2024-inclusions.png'
      ]
    },
    {
      id: 17,
      title: 'Season Greetings 2025',
      price: 280.00,
      imageUrl: 'assets/images/season-greetings-2025.png',
      description: 'Prepare-se para 2025 com o mais novo Season\'s Greetings. Design moderno e futurista, com novos photocards e calendário exclusivo.',
      category: 'season-greetings',
      versions: [
        { name: 'Season Greetings 2025', imageUrl: 'assets/images/season-greetings-2025.png' },
      ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/season-greetings-2025.png',
        'assets/images/season-greetings-2025-inclusions-1.png',
        'assets/images/season-greetings-2025-inclusions-2.png'
      ]
    },
    {
      id: 18,
      title: 'Bunini Costume Plushie',
      price: 120.00,
      imageUrl: 'assets/images/bunini-plushie.png',
      description: 'Pelúcia adorável do Bunini vestindo figurinos icônicos dos MVs. Perfeito para decorar seu quarto!',
      category: 'merch',
      versions: [
        { name: 'Pink Ver', imageUrl: 'assets/images/bunini-plushie-pink.png' },
        { name: 'Blue Ver', imageUrl: 'assets/images/bunini-plushie-blue.png' }
      ],
      hasSetOption: false,
      hasRandomOption: true,
      inclusionImages: ['assets/images/bunini-plushie.png']
    },
    {
      id: 19,
      title: 'NJS X PPG Phone Case',
      price: 85.00,
      imageUrl: 'assets/images/ppg-phone-case.png',
      description: 'Capa de celular da colaboração Powerpuff Girls x NewJeans. Proteção com muito estilo.',
      category: 'merch',
      versions: [
        { name: 'iPhone 14 Pro' },
        { name: 'iPhone 15 Pro' },
        { name: 'Samsung S23' }
      ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: ['assets/images/ppg-phone-case.png']
    },
    {
      id: 20,
      title: 'Tokki Keyring',
      price: 45.00,
      imageUrl: 'assets/images/tokki-keyring.png',
      description: 'Chaveiro do coelho Tokki, mascote oficial. Leve o NewJeans com você para todo lugar.',
      category: 'merch',
      versions: [
         { name: 'White', imageUrl: 'assets/images/tokki-keyring-white.png'},
         { name: 'Black', imageUrl: 'assets/images/tokki-keyring-black.png'}
      ],
      hasSetOption: true,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/tokki-keyring.png',
        'assets/images/tokki-keyring-inclusions.png'
      ]
    },
     {
      id: 21,
      title: 'NJ Cap (Black)',
      price: 110.00,
      imageUrl: 'assets/images/nj-cap-black.png',
      description: 'Boné oficial bordado com o logo do NewJeans. Estilo streetwear minimalista.',
      category: 'merch',
      versions: [ { name: 'One Size' } ],
      hasSetOption: false,
      hasRandomOption: false,
      inclusionImages: [
        'assets/images/nj-cap-black.png'
      ]
    }
  ];

  constructor() { }

  getAlbums(): Observable<Album[]> {
    return of(this.albums);
  }

  getAlbumById(id: number): Observable<Album | undefined> {
    const album = this.albums.find(a => a.id === id);
    return of(album);
  }
}
