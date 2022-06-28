import java.util.Scanner;

public class Sentence{
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String text;
        char letter;
        int index=-1;

        System.out.println("Enter the sentence");
        text = scanner.nextLine();
        char[] textArray = text.toCharArray();
        System.out.println("Enter the letter");
        letter =scanner.next().charAt(0);

        for(int i=0;i<text.length();i++){
            if(letter==textArray[i]){
                index=i;
                break;
            }
        }
        if(index>0){
            for(int i=index+1;i<text.length();i++){
                System.out.print(textArray[i]);
            }
        }else{
            System.out.println("The letter does not exist in the sentence");
        }
    }
}