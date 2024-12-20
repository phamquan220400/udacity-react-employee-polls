import {_saveQuestion, _saveQuestionAnswer} from "./_DATA";

jest.setTimeout(10000);

describe('_saveQuestion', () => {
    it('_saveQuestion success: will return the question is successful', async () => {
        let question = {
            author: "phamquan",
            optionOneText: 'First option',
            optionTwoText: 'Second option'
        };
        let result = await _saveQuestion(question);
        expect(result.author).toEqual('phamquan');
        expect(result.optionOne.text).toEqual('First option');
        expect(result.optionTwo.text).toEqual('Second option');
    });
    it('_saveQuestion fail: error if missing optionOneText',
        async () => {
            let question = {
                author: "phamquan",
                optionTwoText: 'First option'
            };
            await
                expect(_saveQuestion(question))
                    .rejects
                    .toEqual("Please provide optionOneText, optionTwoText, and author");
        });
    it('_saveQuestion fail: error if missing OptionTwoText',
        async () => {
            let question = {
                author: "phamquan",
                optionOneText: 'First option',
            };
            await
                expect(_saveQuestion(question))
                    .rejects
                    .toEqual("Please provide optionOneText, optionTwoText, and author");
        });
    it('_saveQuestion fail: error if missing author',
        async () => {
            let question = {
                optionOneText: 'First option',
                optionTwoText: 'Second option'
            };
            await
                expect(_saveQuestion(question))
                    .rejects
                    .toEqual("Please provide optionOneText, optionTwoText, and author");
        });
});
describe('_saveQuestionAnswer', () => {
    it('_saveQuestionAnswer success: return true',
        async () => {
            let data = {
                answer: "optionTwo",
                authedUser: "tylermcginnis",
                qid: "loxhs1bqm25b708cmbf3g"
            }
            let result = await _saveQuestionAnswer(data);
            expect(result).toEqual(true);
        });
    it('_saveQuestionAnswer fail: missing authedUser', async () => {
        let object = {
            answer: "optionTwo",
            qid: "loxhs1bqm25b708cmbf3g"
        }
        await expect(_saveQuestionAnswer(object))
            .rejects
            .toEqual("Please provide authedUser, qid, and answer");
    });
    it('_saveQuestionAnswer fail: missing answer', async () => {
        let object = {
            authedUser: "tylermcginnis",
            qid: "loxhs1bqm25b708cmbf3g"
        }
        await expect(_saveQuestionAnswer(object))
            .rejects
            .toEqual("Please provide authedUser, qid, and answer");
    });
    it('_saveQuestionAnswer fail: missing qid', async () => {
        let object = {
            authedUser: "tylermcginnis",
            answer: "optionTwo"
        }
        await expect(_saveQuestionAnswer(object))
            .rejects
            .toEqual("Please provide authedUser, qid, and answer");
    });
});