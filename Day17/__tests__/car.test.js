import uuid from 'uuid/v1';
import car from '../src/utils/car';

jest.mock('uuid/v1');

describe('addProdToCar', () => {
  // 作用域中使用 beforeAll 生命週期
  // mockReturnValueOnce() 第一次呼叫時塞值
  // 處理真正的邏輯沒有被執行所以 uuid undefined
  // 並保持關注點
  beforeAll(() => {
    uuid
      .mockReturnValueOnce('123');
  });

  test('check_execute_uuid', () => {
    const newCar = car.addProdToCar('apple', 3);
    // ! 看這裡 console 的結果
    console.log(newCar);

    // 斷言是否有執行過
    // 沒有的話代表 uuid 依賴有問題
    // 與以下內容要測的事情一樣： 執行次數為一
    // expect(uuid.mock.calls.length).toBe(1);
    expect(uuid).toHaveBeenCalled();
  });
});
