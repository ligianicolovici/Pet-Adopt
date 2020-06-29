export class StepIdentifier {
  constructor(
    public _step1: { step: string; state: boolean } = {
      step: 'STEP1',
      state: false,
    },
    public _step2: { step: string; state: boolean } = {
      step: 'STEP2',
      state: false,
    },
    public _step3: { step: string; state: boolean } = {
      step: 'STEP3',
      state: false,
    },
    public _finished: { step: string; state: boolean } = {
      step: 'FINISHED',
      state: false,
    }
  ) {}
  get step1() {
    return this._step1.state;
  }
  get step2() {
    return this._step2.state;
  }
  get step3() {
    return this._step3.state;
  }
  get finished() {
    return this._finished.state;
  }
  public changeState(steper: StepIdentifier, step: string) {
    switch (step) {
      case steper._step1.step: {
        steper._step1.state = true;
        steper._step2.state = false;
        steper._step3.state = false;
        steper._finished.state = false;
        break;
      }
      case steper._step2.step: {
        steper._step1.state = false;
        steper._step2.state = true;
        steper._step3.state = false;
        steper._finished.state = false;
        break;
      }
      case steper._step3.step: {
        steper._step1.state = false;
        steper._step2.state = false;
        steper._step3.state = true;
        steper._finished.state = false;
        break;
      }
      case steper._finished.step: {
        steper._step1.state = false;
        steper._step2.state = false;
        steper._step3.state = false;
        steper._finished.state = true;
        break;
      }
    }
    return steper;
  }
}
