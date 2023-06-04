package com.example.demo.controller;
import com.example.demo.DTO.MoneyFormDTO;
import com.example.demo.exception.NotEnoughMoneyException;
import com.example.demo.exception.ProgramNotFoundException;
import com.example.demo.exception.TransactionNotFoundException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Program;
import com.example.demo.model.Transaction;
import com.example.demo.model.TransactionHistory;
import com.example.demo.model.User;
import com.example.demo.repository.ProgramRepository;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProgramRepository programRepository;

    LocalDateTime now = LocalDateTime.now();
    @PostMapping("/transaction")
    TransactionHistory newTransaction(@RequestBody TransactionHistory newTransaction) {

        return transactionRepository.save(newTransaction);
    }

    @GetMapping("/transactions")
    List<TransactionHistory> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @GetMapping("/transaction/{id}")
    TransactionHistory getTransactionById(@PathVariable int id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new TransactionNotFoundException(id));

    }

    @PutMapping("/transaction/{id}")
    TransactionHistory updateTransaction(@RequestBody TransactionHistory newTransaction, @PathVariable int id) {
        return transactionRepository.findById(id)
                .map(transaction -> {
                    transaction.setTransactionTime(newTransaction.getTransactionTime());
                    transaction.setMoney(newTransaction.getMoney());
                    transaction.setDateConfirm(newTransaction.getDateConfirm());
                    transaction.setUser(newTransaction.getUser());
                    transaction.setNote(newTransaction.getNote());
                    return transactionRepository.save(transaction);
                }).orElseThrow(() -> new TransactionNotFoundException(id));
    }

    @DeleteMapping("/transaction/{id}")
    String deleteTransaction(@PathVariable int id) {
        if (!transactionRepository.existsById(id)) {
            throw new TransactionNotFoundException(id);
        }
        transactionRepository.deleteById(id);
        return "Transaction with id " + id + " has been deleted.";
    }

    @PostMapping("api/user/deposit")
    User depositMoney(@RequestBody MoneyFormDTO moneyFormDTO) {
        return userRepository.findById(moneyFormDTO.getId())
                .map(user -> {
                    user.setMoney(user.getMoney().add(moneyFormDTO.getMoney()));
                    saveToTransaction(user, moneyFormDTO);
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new UserNotFoundException(moneyFormDTO.getId()));
    }

    void saveToTransaction(User user, MoneyFormDTO moneyFormDTO) {
        TransactionHistory transactionHistory = TransactionHistory.builder()
                .user(user)
                .money(moneyFormDTO.getMoney())
                .transaction(Transaction.AddMoney)
                .transactionTime(now)
                .build();
        transactionRepository.save(transactionHistory);
    }

    @PostMapping("api/user/donate")
    TransactionHistory donate(@RequestBody TransactionHistory transactionHistory){
        User user = transactionHistory.getUser();
        Program program = transactionHistory.getProgram();
        MoneyFormDTO userDonate = new MoneyFormDTO(user.getUserID(), transactionHistory.getMoney());
        boolean checkCondition = takeMoney(userDonate);
        if (checkCondition) {
            MoneyFormDTO addMoneyToProgram = new MoneyFormDTO(program.getProgramID(), transactionHistory.getMoney());
            boolean success = addMoneyProgram(addMoneyToProgram);
            if (success) {
                TransactionHistory newTransactionHistory = TransactionHistory.builder()
                        .user(transactionHistory.getUser())
                        .program(transactionHistory.getProgram())
                        .money(transactionHistory.getMoney())
                        .transaction(Transaction.Donate)
                        .transactionTime(now)
                        .build();
                return transactionRepository.save(newTransactionHistory);
            }
        }
        return null;
    }

    boolean takeMoney(MoneyFormDTO userDonate) {
        User user = userRepository.findById(userDonate.getId()).orElseThrow(() -> new UserNotFoundException(userDonate.getId()));
        // check if user have enough money (cannot donate more money than the amount user has
        if (userDonate.getMoney().compareTo(user.getMoney()) == -1) {
            user.setMoney(user.getMoney().subtract(userDonate.getMoney()));
            userRepository.save(user);
            return true;
        }
        throw new NotEnoughMoneyException();
//        return false;
    }

    boolean addMoneyProgram(MoneyFormDTO moneyFormDTO) {
//        Program = programRepository.findById(moneyFormDTO.getId()).orElseThrow(() -> new UserNotFoundException(moneyFormDTO.getId()));
         return programRepository.findById(moneyFormDTO.getId())
                 .map(addMoney->{
                     addMoney.setCurrentMoney(addMoney.getCurrentMoney().add(moneyFormDTO.getMoney()));
                     programRepository.save(addMoney);
                     return true;
                 }).orElseThrow(() -> new ProgramNotFoundException(moneyFormDTO.getId()));
    }

    @GetMapping("api/transaction/highestList")
    List<TransactionHistory> findHighestDonatorsList() {
        return transactionRepository.findTop3ByTransactionOrderByMoneyDesc(Transaction.valueOf("Donate"));
    }

    @GetMapping("api/transaction/recentList")
    List<TransactionHistory> findRecentDonatorsList() {
        return transactionRepository.findTop3ByTransactionOrderByTransactionIDDesc(Transaction.valueOf("Donate"));
    }
}
