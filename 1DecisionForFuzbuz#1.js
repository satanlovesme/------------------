"use strict";

// Yor code here ...
function dscount(str, firstChar, secondChar){
  return str.split(firstChar + secondChar).length - 1;
}
// ������ ��������������� � ������������ �������, ������� ���� ������� �������, �� � � ��� ���������. ������ � ����, ��� � �� ����� ������ � ������ �������, �� ������ =)//
// ... //

// ��� �������� ����� ������������ ��� �����:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-�b-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests success passed.");
} catch(e) {
    console.error(e);
}

// ������� ������� ������������
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Finded items count: ${count}`);
    if (!r) throw "Test failed!";
}