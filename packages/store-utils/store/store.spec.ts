import { Store } from './store';
import { data } from './data';

describe('Store', () => {
  it('Set a string', function () {
    Store.set('myStr', 'The value of myStr.');
    expect(data.myStr).toEqual('The value of myStr.');

    Store.set('myStr', 'This is a new string.');
    expect(data.myStr).toEqual('This is a new string.');
  });

  it('Get a string', function () {
    Store.set('myStr', 'The value of myStr.');
    expect(Store.get('myStr')).toEqual('The value of myStr.');
  });

  it('Set a number', function () {
    Store.set('num123', 123);
    expect(data.num123).toEqual(123);

    Store.set('num0', 0);
    expect(data.num0).toEqual(0);

    Store.set('num_123', -123);
    expect(data.num_123).toEqual(-123);
  });

  it('Get a number', function () {
    Store.set('num123', 123);
    Store.set('num0', 0);
    Store.set('num_123', -123);

    expect(Store.get('num123')).toEqual(123);
    expect(Store.get('num0')).toEqual(0);
    expect(Store.get('num_123')).toEqual(-123);
  });

  it('Set a boolean', function () {
    Store.set('boolTrue', true);
    expect(data.boolTrue).toEqual(true);

    Store.set('boolFalse', false);
    expect(data.boolFalse).toEqual(false);
  });

  it('Get a boolean', function () {
    Store.set('boolTrue', true);
    Store.set('boolFalse', false);

    expect(Store.get('boolTrue')).toEqual(true);
    expect(Store.get('boolFalse')).toEqual(false);
  });

  it('Set a object', function () {
    Store.set('obj', { str: 'abc', num: 1, arr: ['aaa', 111], children: { key: 123 } });
    expect(data.obj).toEqual({ str: 'abc', num: 1, arr: ['aaa', 111], children: { key: 123 } });

    Store.set('objEmpty', {});
    expect(data.objEmpty).toEqual({});
  });

  it('Get a object', function () {
    Store.set('obj', { str: 'abc', num: 1, arr: ['aaa', 111], children: { key: 123 } });
    Store.set('objEmpty', {});

    expect(Store.get('obj')).toEqual({ str: 'abc', num: 1, arr: ['aaa', 111], children: { key: 123 } });
    expect(Store.get('obj.str')).toEqual('abc');
    expect(Store.get('obj.num')).toEqual(1);
    expect(Store.get('obj.num')).toEqual(1);
    expect(Store.get('objEmpty')).toEqual({});
  });

  it('Set a arr', function () {
    Store.set('arr', [{}, 'a', 1, true]);
    expect(data.arr).toEqual([{}, 'a', 1, true]);
  });

  it('Get a arr', function () {
    Store.set('arr', [{ child: 'child' }, 'a', 1, true]);
    expect(Store.get('arr')).toEqual([{ child: 'child' }, 'a', 1, true]);
    expect(Store.get('arr.0')).toEqual({ child: 'child' });
    expect(Store.get('arr.0.child')).toEqual('child');
    expect(Store.get('arr.1')).toEqual('a');
    expect(Store.get('arr.2')).toEqual(1);
    expect(Store.get('arr.3')).toEqual(true);
  });

  it('observers', function () {
    const subObj = Store.subscribe('obsObj', value => {
      console.log('obsObj changed:', value);
      expect(value).not.toBe(null);
    });
    const subA = Store.subscribe('obsObj.a', value => {
      console.log('obsObj.a changed:', value);
      expect(value).not.toBe(null);
    });
    const subB = Store.subscribe('obsObj.a.b', value => {
      console.log('obsObj.a.b changed:', value);
      expect(value).not.toBe(null);
    });
    Store.set('obsObj.num', 123);
    Store.set('obsObj.a.b', 456);

    data.obsObj.a.b = 789;
    Store.updated('obsObj.a.b');

    subObj.unsubscribe();
    subA.unsubscribe();
    subB.unsubscribe();
  });

  it('New object', function () {
    Store.set('test', 'Test in global');
    expect(Store.get('test')).toEqual('Test in global');
    console.log("Store.get('test')", Store.get('test'));
    const s = new Store();
    s.set('test', 'Test in new');
    console.log("s.get('test')", s.get('test'));
    expect(s.get('test')).toEqual('Test in new');

    expect(s.get('test')).not.toEqual(Store.get('test'));
  });

  it('observers in new', function () {
    const s = new Store();
    const subObj = s.subscribe('obsObj', value => {
      console.log('observers in new changed:', value);
      expect(value).not.toBe(null);
    });
    const subA = s.subscribe('obsObj.a', value => {
      console.log('obsObj.a in new changed:', value);
      expect(value).not.toBe(null);
    });
    const subB = s.subscribe('obsObj.a.b', value => {
      console.log('obsObj.a.b in new changed:', value);
      expect(value).toBe(789);
    });
    s.set('obsObj.num', 123);
    s.set('obsObj.a.b', 456);

    const obsObj = s.get('obsObj');
    obsObj.a.b = 789;
    s.updated('obsObj.a.b');

    console.log('xxxxxxxxxxxxxx', s.data);

    subObj.unsubscribe();
    subA.unsubscribe();
    subB.unsubscribe();
  });

});
