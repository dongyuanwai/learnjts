import capitalNum from '../src/capitalNum'

test('-1 输出  不支持负数',()=>{
    expect(capitalNum(-1)).toBe("不支持负数")
})
test('3 输出 三',()=>{
    expect(capitalNum(3)).toBe("三")
})

test('13 输出 十三',()=>{
    expect(capitalNum(13)).toBe("十三")
})

test('23 输出 二十三',()=>{
  expect(capitalNum(23)).toBe("二十三")
})

test('20 输出 二十',()=>{
    expect(capitalNum(20)).toBe("二十")
  })

test('100 输出 不支持100及以上的数字',()=>{
  expect(capitalNum(100)).toBe("不支持100及以上的数字")
})