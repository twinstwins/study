package lexer

import (
	"monkey/token"
	"testing"
)

func TestNextToken(t *testing.T) {
	input := `let five = 5;`

	tests := []struct {
		expectedType    token.TokenType
		expectedLiteral string
	}{
		{token.LET, "let"},
		{token.IDENT, "five"},
		{token.ASSIGN, "="},
		{token.INT, "5"},
		{token.SEMICOLON, ";"},
		{token.EOF, ""},
	}

	l := New(input)

	for i, tt := range tests {
		tok := l.NextToken()

		if tok.Type != tt.expectedType {
			t.Fatalf("tests[%d] - tokentype wrong. expected=%q, got=%q",
				i, tt.expectedType, tok.Type)
		}

		if tok.Literal != tt.expectedLiteral {
			t.Fatalf("tests[%d] - literal wrong. expected=%q, got=%q",
				i, tt.expectedLiteral, tok.Literal)
		}
	}
}

func TestReadChar(t *testing.T) {
	input := "=;)"
	l := New(input)

	tests := []struct {
		expectedChar   byte
		expectedPos    int
		expectedReadPos int
	}{
		{'=', 0, 1},
		{';', 1, 2},
		{')', 2, 3},
		{'\x00', 3, 4},
		 // inputの終わりに達した後
	}

	for i, tt := range tests {

		if l.ch != tt.expectedChar {
			t.Fatalf("tests[%d] - wrong char. expected=%q, got=%q", i, tt.expectedChar, l.ch)
		}

		if l.position != tt.expectedPos {
			t.Fatalf("tests[%d] - wrong position. expected=%d, got=%d", i, tt.expectedPos, l.position)
		}

		if l.readPosition != tt.expectedReadPos {
			t.Fatalf("tests[%d] - wrong readPosition. expected=%d, got=%d", i, tt.expectedReadPos, l.readPosition)
		}
		
		l.readChar()
	}
}
