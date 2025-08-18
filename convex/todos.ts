import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

//get all todos
export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

//get a single todo
export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const todoId = await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
      createdAt: Date.now(),
    });
    return todoId;
  },
});
//update a todo's text
export const updateTodo = mutation({
  args: { id: v.id("todos"), text: v.string() },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) throw new ConvexError("Todo not found");

    const updatedTodo = await ctx.db.patch(args.id, {
      text: args.text,
      createdAt: Date.now(),
    });
    return updatedTodo;
  },
});

//update a todo's completion status
export const toggleTodoCompletion = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) throw new ConvexError("Todo not found");

    const updatedTodo = await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
    return updatedTodo;
  },
});

//delete a todo
export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) throw new ConvexError("Todo not found");

    const deletedTodo = await ctx.db.delete(args.id);
    return { success: true, todo: deletedTodo };
  },
});

//delete all todos
export const deleteAllTodos = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").collect();
    if (todos.length === 0) throw new ConvexError("No todos to delete");

    for (const todo of todos) {
      await ctx.db.delete(todo._id);
    }
    return { success: true, deletedCount: todos.length };
  },
});
