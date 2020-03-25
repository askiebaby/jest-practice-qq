import uuid from 'uuid/v1';
import car from '../src/utils/car';

jest.mock('uuid/v1');

// 先把資料 spy 起來，測試真實邏輯
const getCurrentCarSpy = jest.spyOn(car, 'getCurrentCar');

describe('addProdToCar', () => {
  // 作用域中使用 beforeAll 生命週期
  // mockReturnValueOnce() 第一次呼叫時塞值
  // 處理真正的邏輯沒有被執行所以 uuid undefined
  // 並保持關注點
  beforeAll(() => {
    uuid
      .mockReturnValueOnce('123');
  });

  test('check_add_prod', () => {
    const newCar = car.addProdToCar('apple', 3);

    // 斷言是否有執行過
    // 沒有的話代表 uuid 依賴有問題
    // 與以下內容要測的事情一樣： 執行次數為 1
    // expect(uuid.mock.calls.length).toBe(1);
    expect(uuid).toHaveBeenCalled();

    // 驗證 spy 的真實邏輯有被呼叫
    expect(getCurrentCarSpy).toHaveBeenCalled();

    // 驗證新車加入時有沒有相等維以下內容
    // id 是 123 ，是透過上方 mockReturnValueOnce() 塞進來的
    expect(newCar).toEqual(
      [{ id: '123', name: 'apple', count: 3 }],
    );
  });
});
