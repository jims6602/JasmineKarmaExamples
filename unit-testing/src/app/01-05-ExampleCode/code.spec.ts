import { Fundamentals } from './code';
import { ArraysAndStrings } from './code';
import { SetupAndTeardownComponent } from './code';
import { TodoFormComponent } from './code';
import { VoteComponent } from './code';

describe('Fundamentals', () => {
    it('compute(-1) :should return 0 if input is negative', () => {
        const job = new Fundamentals();
        const result = job.compute(-1);
        console.log('compute(-1) = ' + result);
        expect(result).toBe(0);
    });
});

describe('ArraysAndStrings', () => {
    it('greet(\'cusey\') :should include the name in the message', () => {
        const job = new ArraysAndStrings();
        const result = job.greet('cusey');
        console.log('greet(\'cusey\') = ' + result);
        expect(result).toContain('cusey');
    });

    it('getCurrencies()  :should return the supported currencies', () => {
        const job = new ArraysAndStrings();
        const result = job.getCurrencies();
        console.log('getCurrencies() = ' + result);
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });

});

describe('SetupAndTeardownComponent', () => {
    let component: SetupAndTeardownComponent;

    beforeEach(() => {
        // Set up
        component = new SetupAndTeardownComponent();

    });
    afterEach(() => {
        // Tear down
    });

    it('upVotes(): should increment totalVotes when upvoted', () => {
        // Arrange

        // Act
        component.upVote();
        // Assert
        expect(component.totalVotes).toBe(1);

    });

    it('upVotes(): should decrement totalVotes when downvoted', () => {
        // Arrange
        // Act
        component.downVote();
        // Assert
        expect(component.totalVotes).toBe(-1);

    });
});

import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
    let component: TodoFormComponent;

    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
    });

    it('should create a form with 2 controls ( NAME and EMAIL)', () => {
        expect(component.form.contains('name')).toBe(true);
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('should make the NAME control required', () => {
        const nameControl = component.form.get('name');
        nameControl.setValue('');
        expect(nameControl.valid).toBeFalsy();
    });
});



describe('VoteComponent', () => {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should raise voteChanged event when upvoted', () => {
        let totalVotes = null;
        component.voteChanged.subscribe( tv => totalVotes = tv );

        component.upVote();

        // expect(totalVotes).not.toBeNull();
        expect(totalVotes).toBe(1);
    });
});
