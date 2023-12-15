package router

// 使用するライブラリをimport
import (
	"example.com/m/v2/model"

	"net/http"

	"github.com/labstack/echo/v4"
)

// 関数 GetTasksHandlerは引数がecho.Context型のc で、戻り値はerror型である
func GetTasksHandler(c echo.Context) error {

	// model(package)の関数GetTasksを実行し、戻り値をtasks,errと定義する。
	tasks, err := model.GetTasks()

	// errが空でない時は StatusBadRequest(*5) を返す
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Bad Request")
	}

	// StasusOK と tasksを返す
	return c.JSON(http.StatusOK, tasks)
}

type ReqTask struct {
	Name string `json:"name"`
}

// 関数 AddTaskHandler は引数がecho.Context型で、戻り値はerror型である
func AddTaskHandler(c echo.Context) error {

	// 空のReqTaskである、reqを定義
	var req ReqTask

	// bodyのjsonファイルをbind(*1)
	err := c.Bind(&req)
	// エラーハンドリング(day-3のGetTaskHandlerを参照)
	// StatusBadRequestを返す
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Bad Request")
	}

	// 空のmodel(package)のTaskである、taskを定義
	var task *model.Task

	// model(package)のAddTask関数を実行し、戻り値をtask,errと定義
	task, err = model.AddTask(req.Name)
	// エラーハンドリング
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Bad Request")
	}

	// StastsOK と 追加されたtaskを返す
	return c.JSON(http.StatusOK, task)
}
