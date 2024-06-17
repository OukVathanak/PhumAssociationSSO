export interface QueryParams {
  sort?: string | string[];
  where?: {
    [key: string]: any;
  };
  filters?: {
    [key: string]: any;
  };
  populate?: any;
  fields?: string | string[];
  pagination?: {
    page?: number;
    pageSize: number;
  };
}

export interface Media {
  id: number;
  name: string;
  width: number | null;
  height: number | null;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
}

// export interface Media {
//   id: number;
//   name: string;
//   alternativeText: string | null;
//   caption: string | null;
//   width: number | null;
//   height: number | null;
//   formats: {
//     thumbnail?: {
//       name: string;
//       hash: string;
//       ext: string;
//       mime: string;
//       width: number;
//       height: number;
//       size: number;
//       url: string;
//     };
//   };
//   hash: string;
//   ext: string;
//   mime: string;
//   size: number;
//   url: string;
//   previewUrl: string | null;
//   provider: string;
//   createdAt: Date;
//   updatedAt: Date;
// }
