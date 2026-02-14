import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  githubId: number;

  name: string;
  fullName?: string;

  description?: string | null;
  homepage?: string | null;

  htmlUrl: string;

  stargazersCount: number;
  forksCount: number;

  language?: string | null;

  //? Portfolio custom fields
  imageUrl?: string;
  isFeatured: boolean;
  isHidden: boolean;
  order: number;
}

const ProjectSchema = new Schema<IProject>(
  {
    githubId: { type: Number, required: true, unique: true },

    name: { type: String, required: true },
    fullName: String,

    description: String,
    homepage: String,

    htmlUrl: String,

    stargazersCount: Number,
    forksCount: Number,

    language: String,

    //? Custom portfolio controls
    imageUrl: String,
    isFeatured: { type: Boolean, default: false },
    isHidden: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
