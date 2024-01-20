export interface Meme {
  success: boolean;
  data: {
    memes: [
      {
        id: number;
        name: string;
        url: string;
        width: number;
        height: number;
        box_count: number;
      },
    ];
  };
}
