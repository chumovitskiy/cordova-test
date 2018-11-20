package com.beuty4me.pojos;

import java.util.Objects;

public class Task {
    private int _id;
    private String text;

    public Task (int id, String text) {
        this._id=id;
        this.text=text;
    }

    @Override
    public String toString() {
        return "Task{" +
                "_id: " + _id +
                ", text: '" + text + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Task)) return false;
        Task task = (Task) o;
        return getId() == task.getId() &&
                Objects.equals(getText(), task.getText());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getText());
    }

    public int getId() {
        return _id;
    }

    public String getText() {
        return text;
    }
}
