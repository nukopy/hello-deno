package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	osStdin()
	getStringFromStdinWithReader()
	getStringFromStdinWithoutReader()
}

func osStdin() {
	in := os.Stdin
	fmt.Println("in:", in)
}

func getStringFromStdinWithReader() {
	fmt.Println("===== getStringFromStdinWithReader =====")

	// ユーザー入力を Reader に読み込む
	reader := bufio.NewReader(os.Stdin)

	// Reader から変数 text に文字列を格納
	fmt.Print("Enter text: ")
	text, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println(err)
		return
	}

	// 入力したテキストを出力
	fmt.Printf("You entered: %s", text)
}

func getStringFromStdinWithoutReader() {
	fmt.Println("===== getStringFromStdinWithoutReader =====")

	// ユーザー入力を Reader を介さずに直接文字列として読み込む
	fmt.Print("Enter text: ")

	var text string
	b, err := fmt.Scanln(&text) // ユーザーが改行を入力するまでのテキストをtext変数に直接読み込んでいます。
	if err != nil {
		fmt.Println(err)
		return
	}

	// 入力したテキストを出力
	fmt.Printf("You entered: %s (%d bytes)\n", text, b)
}