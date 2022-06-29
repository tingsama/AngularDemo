import { Time } from "@angular/common";

export class Note {
    public starttime: Date;
    public endtime: Date;
    public location: String;
    public category: String;
    public impotance: Boolean;
    public details: String;
    constructor(starttime: Date, endtime: Date, location: String, 
                category: String, importance: Boolean, details: String) {
        this.starttime = starttime;
        this.endtime = endtime;
        this.location = location;
        this.category = category;
        this.impotance = importance;
        this.details = details;
    }
    // time: Time;
    // location: String;
    // category: String;
    // impotance: Boolean;
    // details: String;
    // constructor(time: Time, location: String, category: String, importance: Boolean, details: String) {
    //     this.time = time;
    //     this.location = location;
    //     this.category = category;
    //     this.impotance = importance;
    //     this.details = details;
    // }
}