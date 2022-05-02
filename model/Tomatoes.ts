import { NumberValueAccessor } from "@angular/forms";
import { Critic } from "./Critic";
import { Viewer } from "./Viewer";

export class Tomatoes{
    rating?: number;
    votes?: number;
    id?: number;
    viewer?: Viewer;
    fresh?: number;
    critic?: Critic;
    rotten?: number;
    dvd?: Date;
    lastUpdated?: Date;
    website?: string;

}