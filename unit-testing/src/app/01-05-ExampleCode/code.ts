import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';


// 01 Fundamentals
export class Fundamentals {

    compute(number: any) {
        if (number < 0) {
            return 0;
        }
        return number + 1;
    }

}
// 02 Arrays And Strings
export class ArraysAndStrings {

    greet(name) {
        return 'Welcome ' + name;
    }

    getCurrencies() {
        return ['USD', 'AUD', 'EUR'];
    }
}

// 03 Setup And Teardown
export class SetupAndTeardownComponent {
    totalVotes = 0;

    upVote() {
       this.totalVotes++;
    }
    downVote() {
       this.totalVotes--;
    }
}


// 04 Forms
export class TodoFormComponent {
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: [''],
        });
    }
}

// 05 Event Emitters
export class VoteComponent {
    totalVotes = 0;
    voteChanged = new EventEmitter();

    upVote() {
        this.totalVotes++;
        // Rises an event called voteChanged. In the event data should be totalVotes
        this.voteChanged.emit(this.totalVotes);
    }
}
