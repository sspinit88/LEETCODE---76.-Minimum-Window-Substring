/**
 76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window
substring
of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.


Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

*/


/*
Ваша задача - найти минимальное окно в строке s, которое включает все символы из строки t (включая дубликаты). Если такого окна нет, верните пустую строку "".

Вот шаги, которые мы будем следовать:

1. Создайте два массива для подсчета символов для s и t.
2. Используйте два указателя, чтобы создать окно в s, которое содержит все символы t.
3. Постепенно сдвигайте левый указатель вправо, пока окно все еще содержит все символы t, и обновите минимальное окно.
4. Повторяйте шаги 2 и 3, пока правый указатель не достигнет конца s.

Your task is to find the minimum window in string s that includes all characters from string t (including duplicates). If there is no such window, return the empty string "".

Here are the steps we will follow:

1. Create two character count arrays for s and t.
2. Use two pointers to create a window in s that contains all characters of t.
3. Gradually move the left pointer to the right as long as the window still contains all characters of t, and update the minimum window.
4. Repeat steps 2 and 3 until the right pointer reaches the end of s.

*/

function minWindow(s, t) {
    // Создаем два массива для подсчета символов для s и t
    // Create two character count arrays for s and t
    let sCount = new Array(128).fill(0);
    let tCount = new Array(128).fill(0);
    let tLen = t.length;
    let sLen = s.length;

    // Подсчитываем символы в t
    // Count characters in t
    for (let i = 0; i < tLen; i++) {
        tCount[t.charCodeAt(i)]++;
    }

    let required = tLen;
    let min = sLen + 1;
    let left = 0;
    let right = 0;
    let start = 0;

    // Пока правый указатель не достигнет конца s
    // Until the right pointer reaches the end of s
    while (right < sLen) {
        // Если символ s[right] присутствует в t
        // If character s[right] is present in t
        if (tCount[s.charCodeAt(right)] > 0) {
            required--;
        }
        tCount[s.charCodeAt(right)]--;
        right++;

        // Пока окно содержит все символы t
        // While the window contains all characters of t
        while (required === 0) {
            // Обновляем минимальное окно
            // Update the minimum window
            if (right - left < min) {
                min = right - left;
                start = left;
            }

            // Сдвигаем левый указатель вправо
            // Move the left pointer to the right
            tCount[s.charCodeAt(left)]++;
            if (tCount[s.charCodeAt(left)] > 0) {
                required++;
            }
            left++;
        }
    }

    // Возвращаем минимальное окно или пустую строку, если такого окна нет
    // Return the minimum window or an empty string if no such window exists
    return min === sLen + 1 ? "" : s.substring(start, start + min);
}

